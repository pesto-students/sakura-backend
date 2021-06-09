const { series } = require('gulp');
const rimraf = require("rimraf");
const { join } = require("path");
const { exec } = require("child_process");
const { existsSync } = require("fs");
const argv = require('yargs').argv;


const buildName = ".build";
const buildPath = join(__dirname, buildName);

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function cleanBuild(cb) {
    // body omitted
    if (existsSync(buildPath))
        return rimraf(buildPath, (err) => {
            if (err) {
                console.log(err);
            }
            cb();
        });
    else cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildProject(cb) {
    // body omitted
    const staging = argv["staging"] || "testing";
    const region = argv["region"] || "--region ap-south-1";
    process.env["LAMBDA_STAGING"] = staging;
    return exec(`npm run build`, (err, data) => {
        if (err) console.log(err);
        else {
            console.log(data);
            process.chdir(buildPath);
            exec(`serverless deploy --stage ${staging} ${region}`, (err, data) => {
                if (err) console.log(err);
                console.log(data);
                process.chdir(join(".."));
            })
        }
        cb();
    })
}

exports.build = series(cleanBuild, buildProject);