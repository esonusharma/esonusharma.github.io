Title: Fix the Error "debconf DbDriver "config" /var/cache/debconf/config.dat is locked by another process Resource temporarily unavailable
Date: 2020-06-02
Modified: 2020-06-02
Category: howto
Tags: ubuntu
Author: esonusharma.github.io
Summary: You have encountered the above error in Debian or Debian based GNU/Linux Distribution.
Status: published

You have encountered the above error in Debian or Debian based GNU/Linux Distribution.

This may cause problems like:

```
- errors in sudo apt-get update, sudo apt-get upgrade, sudo apt-get install, and other processes.
- dpkg: error processing package
- post-installation script subprocess returned error exit status 1
- Errors were encountered while processing
- E: Sub-process /usr/bin/dpkg returned an error code (1)
```

### Solution

- Step 1. Execute command in terminal

```
sudo fuser -v /var/cache/debconf/config.dat
```

- Step 2. You will get result in following format. Copy the PID from it.

```
  USER        PID ACCESS COMMAND
```

- Step 3. Execute command. Replace PID with your actual PID. If the first command works, then second command will give output “No such process”

```
  sudo kill PID
  or
  sudo kill -9 PID
```

- Step 4. Now you will not get the error.