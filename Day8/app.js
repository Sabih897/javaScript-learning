import {person, info} from '../Day8/utils.js';

person(process.argv[2],process.argv[3]);

let version = process.version;
let platform = process.platform;
let workingDir = process.cwd();
let CLIagrs = process.argv;

info(version,platform,workingDir,CLIagrs);