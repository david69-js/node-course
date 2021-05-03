'use strict'
const singleThread = () =>{
    console.log('--------------------------------------------------------------------');
    console.log('id del proceso..............'+process.pid);
    console.log('Titulo....................'+process.title);
    console.log('Directorio de node ...........'+process.execPath);
    console.log('Directorio actual.............'+process.cwd());
    console.log('Version de node ................'+process.version);
    console.log('Versiones dependeciales.........'+process.versions);
    console.log('Plataforma de (S.O)..............'+process.platform);
    console.log('Arquitectura (S.O).............'+process.arch);
    console.log('Tiempo activo de node..........'+process.uptime());
    console.log('Argumentos del proceso..........'+process.argv);
    console.log('-----------------------------------------------------------------');
}

//singleThread()
