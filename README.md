
# Multikey-strapi-template

Multikey Modx Template powered by [NikolasMelui][nikolasmelui] and [RinatDav][rinatdav] for [multikey.studio][multikeystudio]

***

You need to install [Nodejs][nodejs] first.

## Quickstart

You also need:

- [Mognodb][mongodb]
- [Strapi][nodejs]

If you need, you can create a new MySQL database for new MODX Revo project, but usually Gitify creates it automatically.
If you want to do it yourself:
* __db_name__ - your db name;
* __user_name__ - your user name;
* __user_password__ - your user password;
```
$ mysql -u root -p
mysql> CREATE DATABASE db_name;
mysql> GRANT ALL PRIVILEGES ON db_name.* TO **user_name**@localhost IDENTIFIED BY 'user_password';
```

## Installation

First install [Gitify][gitify]:
```
$ git clone https://github.com/modmore/Gitify.git Gitify
$ cd Gitify
$ composer install
$ chmod +x Gitify
```

Create a directory for the new project and cd into it:
```
$ mkdir ${new_project} && cd ${new_project}
```
Clone the template on your local mashine into created directory:
```
$ git clone https://github.com/NikolasMelui/multikey-modx-template.git ./
```
Install the latest MODX Revo version:
```
$ Gitify modx:install
```
Install packages:
```
$ Gitify package:install --all
```
Now build the project installation:
```
$ Gitify build --force
```

Use this sh script (if you need) to add necessary rules for files and folders:
```
$ sh rules.sh
```

And now you have a ready-made template.

### Quick Start

Use npm to install frontend dependencies and run browserSync and watchers to realy 'reactive' development:
```
$ npm i
$ npm run dev
```

... and this command (if you need) to create a minified frontend files:
```
$ npm run prod
```

### Development

Want to contribute? Great!
This is an opensource project. All contributions are welcome. Make a fork and go on!

| Todos      | Status |
| ---------- | ------ |
| es6        | -      |
| Patterns   | -      |
| Webpack    | -      |
| ESLint     | -      |
| Mocha      | -      |
| CI\CD      | -      |
| SFTP\rsync | -      |
| Docker     | -      |
| Kubernates | -      |

#### License

MIT License

Copyright (c) 2018 NikolasMelui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**From developers 2 developers.**
[NikolasMelui][nikolasmelui]
[RinatDav][rinatdav]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [nikolasmelui]: <https://github.com/NikolasMelui>
   [rinatdav]: <https://github.com/RinatDav>
   [multikeystudio]: <https://multikey.studio>
   [mongodb]: <https://www.mongodb.com/>
   [vuejs]: <https://www.vuejs.org/>
   [nuxtjs]: <https://www.nuxtjs.org/>
   [vuex]: <https://www.vuex.vuejs.org/>
   [strapi]: <https://www.strapi.io/>
   [nodejs]: <http://nodejs.org>
   [typescript]: <http://typescriptlang.org>
   [russian-docs]: <https://github.com/NikolasMelui/multikey-modx-template/blob/master/README-ru.md>
