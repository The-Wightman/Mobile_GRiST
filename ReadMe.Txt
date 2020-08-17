Mobile Grist

Installation instructions

1.0 Foreword

It is important to note that for developing this app further or running it in the development environment for IOS target devices, requires a Macintosh computer running MAC-OS and then follow the instructions found here: https://reactnative.dev/docs/environment-setup under CLI quickstart, dev OS MAC, target OS IOS.

2.0 Acquiring the local Repository
The project can be accessed from the 25/08/2020 via a public Git Repository, where it will be hosted for one year before complete handoff to Dr Buckingham.

GIT REPO:https://github.com/The-Wightman/Mobile_GRiST

Once you have confirmed the repository is both available and public use the following command inside of the CMD on your development machine.

$ git clone https://github.com/The-Wightman/Mobile_GRiST

Note you can select a directory for the installation other than the GIT default by using:

$ git clone https://github.com/The-Wightman/Mobile_GRiST <Directory>

3.0 Install React Native dependencies

React native is best used in line with Node Version 10 or above,Java development Kit SE version 8 or above and python2 as of August 2020. React native recommend using chocolatey as the package manager with which to install these requirements using an elevated CMD window and the following command:

choco install -y nodejs.install python2 openjdk8

4.0 Installing Android Dev studio

Visit https://developer.android.com/studio and install the latest version of the android development studio, during the install process ensure the following options are ticked:
-Android SDK
-Android SDK Platform
-Android Virtual device

When installing the Android SDK make sure to install the latest version of android AND the android 10 (q) by selecting configure on the install screen (Bottom right of the screen).

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

Android SDK Platform 29
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

4.1 Hyper-V
It is recommended at this time to install hyper-v for windows machines as this improves and assists the performance of the Android SDK however it is not strictly necessary, for AMD users, seek alternative virtual machine software or Download HAXM.

5.0 configure the Android Home environment

The React Native tools require some environment variables to be set up to build apps with native code.

Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
ANDROID_HOME Environment Variable

The SDK is installed, by default, at the following location:

%LOCALAPPDATA%\Android\Sdk

You can find the actual location of the SDK in the Android Studio "Settings" dialogue, under Appearance & Behavior → System Settings → Android SDK.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

Open PowerShell
Copy and paste Get-ChildItem -Path Env:\ into PowerShell
Verify ANDROID_HOME has been added

5.1 Add platform-tools to Path
Open the Windows Control Panel.
Click on User Accounts, then click User Accounts again
Click on Change my environment variables
Select the Path variable.
Click Edit.
Click New and add the path to platform-tools to the list.
The default location for this folder is:

%LOCALAPPDATA%\Android\Sdk\platform-tools

6.0 Running on emulated devices and real devices

Use Android Studio to open ./Grist_Mobile/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Select the boot device icon symbol, if you haven’t already created a virtual device it will prompt you to create one.

6.1 Metro server and run device

Open a CMD window inside of the react-native project folder and enter the following command:
npx react-native run-android

A mobile emulator should open after a few seconds showing the login screen for the mobile grist Application.

