Title: OpenFOAM Installation
Date: 2020-06-25
Modified: 2020-06-25
Category: openfoam
Tags: cfd
Author: esonusharma.github.io
Summary: If you are unable to install OpenFOAM in Ubuntu, then you are at the right place.
Status: published

If you are unable to install OpenFOAM in Ubuntu, then you are at the right place.

The installation of OpenFOAM is pretty straight forward in Ubuntu, you just need to follow the instructions [here](https://openfoam.org/download/).

At the time of writing this article, OpenFOAM Version 7 is the latest, so the instructions are specific to that, but you can use the same instructions for other versions with minor changes in names.

I will suggest you to follow the latest instructions on the official site [OpenFOAM](http://openfoam.org/).

Besides that, you can always take a cue from this post too.

Also, you should be connected to internet for installing OpenFOAM.

### Steps to install OpenFOAM on Ubuntu

- Open the terminal using the icon or Shortcut “Ctrl+Alt+T”.
- Type following commands one by one pressing enter at the end of each command.

Commands that need to be executed only once for a given system:

```
 sudo sh -c "wget -O - <https://dl.openfoam.org/gpg.key> | apt-key add -"
 sudo add-apt-repository <http://dl.openfoam.org/ubuntu>
```

Then Update the system:

```
 sudo apt-get update
```

Finally install the OpenFOAM using command below:

```
 sudo apt-get -y install openfoam7
```

It will take some time to install it. This will install OpenFOAM as well as paraviewopenfoam as a dependency.

You can find the installed programs in the /opt directory of the Computer system in separate directories.

Don’t worry about the updates, as when you update the Ubuntu, these programs get updated automatically.

At last, you need to do the following after installing before you use OpenFOAM.

Open the bashrc file in your system using following command on the terminal:

```
 gedit ~/.bashrc
```

Add the following line at the end of the file:

```
 source /opt/openfoam7/etc/bashrc
```

Open a new terminal (<-this is important), and test that OpenFOAM is working by typing on the terminal:

```
 simpleFoam -help
```

If successful, output will be something like below:

```
 Usage: simpleFoam [OPTIONS]
 options:
     -case <dir>       specify alternate case directory, default is the cwd
     -fileHandler <handler>
                     override the fileHandler
     -hostRoots <(((host1 dir1) .. (hostN dirN))>
                     slave root directories (per host) for distributed running
     -libs <(lib1 .. libN)>
                     pre-load libraries
     -listFunctionObjects
                     List functionObjects
     -listFvOptions    List fvOptions
     -listRegisteredSwitches
                     List switches registered for run-time modification
     -listScalarBCs    List scalar field boundary conditions (fvPatchField<scalar>)
     -listSwitches     List switches declared in libraries but not set in
                     etc/controlDict
     -listTurbulenceModels
                     List turbulenceModels
     -listUnsetSwitches
                     List switches declared in libraries but not set in
                     etc/controlDict
     -listVectorBCs    List vector field boundary conditions (fvPatchField<vector>)
     -noFunctionObjects
                     do not execute functionObjects
     -parallel         run in parallel
     -postProcess      Execute functionObjects only
     -roots <(dir1 .. dirN)>
                     slave root directories for distributed running
     -srcDoc           display source code in browser
     -doc              display application documentation in browser
     -help             print the usage

 Using: OpenFOAM-7 (see <https://openfoam.org>)
 Build: 7-3bcbaf946ae9
```

After that you need to add a project directory in your home folder for your simulation projects using following command on the terminal:

```
 mkdir -p $FOAM_RUN
```

The above command will create a directory named OpenFOAM with a subdirectory named “`<USERNAME>`-`<OpenFOAM Version Number>`” like “x-7” for the username x and version 7 of OpenFOAM.

Errors and solutions encountered in installation of OpenFOAM on Ubuntu:

Check that internet is connected.
Avoid using a proxy.
If you get an error related to ca-certificates then just run the following command on the terminal:

```
 sudo dpkg-reconfigure ca-certificates
```

If the problem still persists, then follow the best answer on this [page](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu).