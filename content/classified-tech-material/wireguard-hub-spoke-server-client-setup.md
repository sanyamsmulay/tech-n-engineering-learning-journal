---
title: Wireguard VPN - Setup and admin
date: 2025-06-18 18:17:10
tags: [classified, tech, WireGuard, VPN]
category: software-dev
---

# 🛡️ Setting Up WireGuard VPN for a 32-Client Network

*Date: 2025-06-18*

This document covers the full conversation and instructions for configuring WireGuard in a hub-and-spoke topology with systemd integration, client-to-client communication, and server-side routing for up to 32 clients.

---

## 🔧 Network Overview

| Role    | IP Address      | Notes                          |
|---------|------------------|--------------------------------|
| Server  | `10.0.0.1/24`    | Central routing node           |
| Clients | `10.0.0.2–33/24` | Communicate via the server     |
| Port    | `51820/UDP`      | Default WireGuard port         |

---

## 🔑 Key Generation

Run this on each system to generate keys:

```bash
wg genkey | tee privatekey | wg pubkey | tee publickey
```

---

## 📡 Server Configuration (`/etc/wireguard/wg0.conf`)

```ini
[Interface]
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = <SERVER_PRIVATE_KEY>

PostUp = sysctl -w net.ipv4.ip_forward=1;          iptables -A FORWARD -i wg0 -j ACCEPT;          iptables -A FORWARD -o wg0 -j ACCEPT

PostDown = iptables -D FORWARD -i wg0 -j ACCEPT;            iptables -D FORWARD -o wg0 -j ACCEPT

[Peer]
PublicKey = <CLIENT1_PUBLIC_KEY>
AllowedIPs = 10.0.0.2/32

[Peer]
PublicKey = <CLIENT2_PUBLIC_KEY>
AllowedIPs = 10.0.0.3/32

[Peer]
PublicKey = <CLIENT3_PUBLIC_KEY>
AllowedIPs = 10.0.0.4/32

# Add peers up to CLIENT32
```

---

## 🖥️ Client Configuration Template (`/etc/wireguard/wg0.conf`)

```ini
[Interface]
Address = 10.0.0.X/24
PrivateKey = <CLIENT_PRIVATE_KEY>
DNS = 10.0.0.1

[Peer]
PublicKey = <SERVER_PUBLIC_KEY>
Endpoint = <SERVER_PUBLIC_IP>:51820
AllowedIPs = 10.0.0.0/24
PersistentKeepalive = 25
```

---

## 🔁 Systemd Integration

### Enable WireGuard at Boot

```bash
sudo systemctl enable wg-quick@wg0.service
```

### Dependent Services

Example `/etc/systemd/system/myservice.service`:

```ini
[Unit]
Description=My VPN-Aware Service
After=network-online.target wg-quick@wg0.service
Requires=wg-quick@wg0.service

[Service]
ExecStart=/usr/local/bin/my-app
Restart=always
User=appuser

[Install]
WantedBy=multi-user.target
```

With optional wait:

```ini
ExecStartPre=/bin/sh -c 'until ip link show wg0 | grep "state UP"; do sleep 1; done'
```

---

## 🧭 Client-to-Client Communication

Clients use:

```ini
AllowedIPs = 10.0.0.0/24
```

Server routes between them with IP forwarding and per-client `/32` `AllowedIPs`.

---

## ✅ Commands

```bash
sudo wg-quick up wg0
sudo wg show
ip a show wg0
```

---

## 🧩 Optional Automation

Automate:
- Key generation
- Config templates
- Peer entry output


---

## 🎉 Summary

You now have:
- WireGuard hub-and-spoke VPN
- 32 clients can be added to this network
- Server-based routing
- Systemd startup and dependency management

