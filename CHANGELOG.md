# Changelog

## SUPER 0.2.0

### Features

 - SUPER now uses templates for report generation. This is one of the biggest changes of the
   release, and enables users to create their own report templates.

 - Installation package for Mac OS.

 - Line highlighting in found vulnerabilities.

 - Reports now show the version of SUPER used to generate them.

 - Added `--open` option to automatically open reports.

 - Added options to the CLI to modify the ones in the config file. We now have `--downloads` or
   `--template` options in the CLI.

 - Added the `--test-all` option to the CLI, that will test all *.apk* files in the *downloads*
   folder.

### Bug Fixes

 - Changed paths for better multiplatform support.

 - Regular Expressions:
    - URL Disclosure no longer detects content providers ("content://...").

### Contributions

 - **[@pocket7878](https://github.com/pocket7878)**
 - **[@VoltBit](https://github.com/VoltBit)**
 - **[@b52](https://github.com/b52)**
 - **[@nxnfufunezn](https://github.com/nxnfufunezn)**
 - **[@atk](https://github.com/atk)**


## SUPER 0.1.0

### Features

 - Release of 64-bit packages for Linux (Debian 8.6, Ubuntu 16.04, CentOS 7, Fedora 24) and Windows
   (8.1+).

 - *AndroidManifest.xml* analysis (Dangerous permission checks).

 - Certificate analysis (Certificate validity checks).

 - Code analysis (37 rules for checking the source code):
    - SQLi
    - XSS
    - URL Disclosure
    - Weak algorithms
    - Insecure WebViews
    - Generic exceptions
    - Root detection
    - ...

 - HTML and JSON report generation.

 - Classification of vulnerabilities (Critical, High, Medium, Low, Info).

 - Application related info.

 - File fingerprinting.
