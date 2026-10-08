
export function person(name, age){
    console.log(`name : ${name}`);
    console.log(`age : ${age}`);
    
}


export function info(version,platform,workingDir,CLIagrs){
    let obj = {
    version : version,
    platform : platform,
    workingDir : workingDir,
    CLIagrs : CLIagrs
}
    console.log(obj);
    
}
m