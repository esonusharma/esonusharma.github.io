Title: Solved errors were encountered while processing grub efi amd64 signed
Date: 2020-06-24
Modified: 2020-06-24
Category: howto
Tags: ubuntu
Author: esonusharma.github.io
Summary: Execute commands below to solve this problem.
Status: published

### Execute commands below to solve this problem

```
sudo apt-get purge grub\*
sudo apt-get install grub-efi
sudo apt-get autoremove
sudo update-grub
```