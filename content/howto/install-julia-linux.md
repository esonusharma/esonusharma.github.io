Title: How to Install Latest Julia Version on Linux?
Date: 2019-05-29
Modified: 2019-05-29
Category: howto
Tags: julia
Author: esonusharma.github.io
Summary: Step-by-Step easy to follow procedure to install Julia programming language on Ubuntu and other Linux based operating systems.
Status: published

Step-by-Step easy to follow procedure to install Julia programming language on Ubuntu and other Linux based operating systems.

I know how frustrated you are trying to successfully install the latest version of the Julia programming language on Linux.

Installation of Julia is straight-forward in Windows, as you just have to double-click the downloaded exe file and follow the instructions.

These are instructions for installation of Julia on Ubuntu but can be adapted on different Linux distributions such as Fedora etc.

When we want to install the latest version of Julia on Linux distributions, there are no specific instructions.

There is an easy way listed on some sites through a PPA available at [https://launchpad.net/~staticfloat/+archive/ubuntu/juliareleases](https://launchpad.net/~staticfloat/+archive/ubuntu/juliareleases), which has some direct commands to be executed for installing Julia, but the version of the Julia you will get may not be the latest and also this is unsupported and untrusted as mentioned on the above link.

If you try to install Julia from the “Ubuntu Software Centre” or “Synaptic Package Manager” or directly using the command “sudo apt-get install julia”, you are probably going to get a very old version of Julia.

I also faced all these problems as I wanted to install an official, pure, untouched fresh copy of the latest version of Julia to learn and use it.

So finally I embarked upon the hard way of getting the latest Julia stable release version installed on my Ubuntu laptop.

Firstly, we have to download the latest released Julia version from the location “[https://julialang.org/downloads/](https://julialang.org/downloads/)”

I used the “Generic Linux Binaries for x86” version. The choice between x86 and ARM depends on the processor of your machine. Also, choose between 32 bit and 64-bit versions based on the Operating system and processor you have on your machine.

After download, you will get a compressed tar.gz archive having a name similar to “julia-0.6.2-linux-x86\_64.tar.gz”. As the “julia-0.6.2-linux-x86\_64.tar.gz” name suggests that I downloaded the Julia version 0.6.2 which is latest at the time of writing this article, generic Linux binaries i.e. this can be used for any Linux system including Ubuntu, Fedora, Centos and more, x86 system and 64-bit operating system.

The names may differ. Adapt the names accordingly.

Remember these are binaries, these don’t need to be installed as they can be directly used from the directory they are extracted.

These instructions can be followed for getting Julia working on most of the Linux operating systems with little or no modifications, but I cannot guarantee the perfect result. Try it at your own risk.

I am assuming that the downloaded file is in your Downloads directory of Ubuntu.

Open the terminal and navigate to the directory where the downloaded tar.gz file resides, in the present case the Downloads directory.

The terminal when just opened will show

```
 x@xpc:~$
```

where x should be replaced by your username and xpc should be replaced by your computer name

Navigate to the Downloads directory using “cd Downloads” command on the terminal written as

```
 x@xpc:~$ cd Downloads
```

and then press enter to get following terminal

```
 x@xpc:~/Downloads$
```

Extract the tar.gz file using the command “tar -zxvf julia-0.6.2-linux-x86_64.tar.gz” as shown below

```
 x@xpc:~/Downloads$ tar -zxvf julia-0.6.2-linux-x86_64.tar.gz
```

Now a directory with extracted contents will be generated in the same parent directory as of the compressed archive with a name similar to “julia-xxxxxxxxxx” where xxxxxxxxxx may be a combination of alphabets and numerals.

This is the final directory you need to run the latest Julia version, no installation is needed.

To run Julia, you can directly run using the Julia file in location “julia-xxxxxxxxxx/bin/julia” as discussed below

Navigate to the bin directory in the extracted directory using the command “cd /Downloads/julia-xxxxxxxxxx/bin” as expressed below

```
 x@xpc:~$ cd /Downloads/julia-xxxxxxxxxx/bin
```

The terminal will now be like

```
 x@xpc:~/Downloads/julia-xxxxxxxxxx/bin$
```

Now run the command “./julia” to run Julia on the terminal as shown below

```
 x@xpc:~/Downloads/julia-xxxxxxxxxx/bin$ ./julia
```

The terminal will now change to Julia as presented below.

```
 julia>
```

But the problem is that I have to navigate to the directory every-time to run Julia.

Many people have discussed on the internet about defining the path and alias through very complex procedures and as I am not a hardcore computer geek, it was really difficult for me to understand.

I came to know about making a soft-link.

So I decided to make a soft-link to the Julia to run it directly from anywhere with a short command without navigating to the directory containing it.

I always try to do things neatly, so I decided to keep the extracted directory named “julia-xxxxxxxxxx” in the “/opt” directory of my system as most of my important programs reside in that.

You need superuser terminal to copy a file into the “/opt” directory.

So I used the command “sudo su” and then provided the password to get the superuser privileges as expressed below

```
 x@xpc:~$ sudo su
 [sudo] password for x:
 root@xpc:/home/x#
```

Now navigate to the directory presently containing the extracted directory as expressed below

```
 root@xpc:/home/x# cd /Downloads/
 root@xpc:/home/x/Downloads#
```

Copy the directory using the command “cp -r julia-xxxxxxxxxx /opt” as shown below

```
 root@xpc:/home/x/Downloads# cp -r julia-xxxxxxxxxx /opt
```

After the directory is copied to the destination, now we will make the soft-link in a directory which is in the system path so that the soft-link can be called from any location to run Julia.

To find out the directories in the system PATH use command “echo $PATH”, you will get a list of paths of directories separated by a colon(:) such as “/usr/local/bin”. You can use any of them. I used “/usr/local/bin” for the soft-link.

Navigate to the chosen folder

```
 root@xpc:/home/x# cd /usr/local/bin
```

The terminal will become

```
 root@xpc:/home/x/usr/local/bin#
```

Create the soft-link using the command “sudo ln -s /opt/julia-xxxxxxxxxx/bin/julia julia” as shown below

```
 root@xpc:/home/x/usr/local/bin# sudo ln -s /opt/julia-xxxxxxxxxx/bin/julia julia
```

Now return to the normal user terminal using command “ctrl+D” at the empty terminal “root@xpc:/home/x/usr/local/bin#”.

The terminal will become

```
 x@xpc:~$
```

Type the newly made soft-link i.e. “julia” on the terminal as shown below

```
 x@xpc:~$ julia
```

This is where the magic happens and you get this

```
 julia>
```