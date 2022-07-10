var gulp = require('gulp');

var winInstaller = require('electron-windows-installer');

 

gulp.task('create-windows-installer', function (done) {

    winInstaller({

        appDirectory: '/home/sayahi/node/electron-quick-start',

        outputDirectory: './release',

        arch: 'ia64',

        authors: "Syncfusion",

        version: "1.0.0",

        iconUrl: "favicon.ico",

        setupIcon: "favicon.ico",

        loadingGif: "ele.gif",

        noMsi:true

    }).then().catch();

});