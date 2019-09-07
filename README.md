linear-cli
==========

A cli tool to interface with linear

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/linear-cli.svg)](https://npmjs.org/package/linear-cli)
[![Downloads/week](https://img.shields.io/npm/dw/linear-cli.svg)](https://npmjs.org/package/linear-cli)
[![License](https://img.shields.io/npm/l/linear-cli.svg)](https://github.com/zephraph/linear-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g linear-cli
$ linear-cli COMMAND
running command...
$ linear-cli (-v|--version|version)
linear-cli/0.0.0 darwin-x64 node-v10.15.3
$ linear-cli --help [COMMAND]
USAGE
  $ linear-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`linear-cli hello [FILE]`](#linear-cli-hello-file)
* [`linear-cli help [COMMAND]`](#linear-cli-help-command)

## `linear-cli hello [FILE]`

describe the command here

```
USAGE
  $ linear-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ linear-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/zephraph/linear-cli/blob/v0.0.0/src/commands/hello.ts)_

## `linear-cli help [COMMAND]`

display help for linear-cli

```
USAGE
  $ linear-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
