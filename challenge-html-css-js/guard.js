console.log(JSON.parse(process.env.npm_config_argv).original[1]);

if(process.env.npm_execpath.match('yarn') 
|| JSON.parse(process.env.npm_config_argv).original[1].match('yarn')) {
    console.log('Dont use yarn');
    process.exit(1);
}