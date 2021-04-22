
//  Demo for Incredible Installations using Node and Inquirer
//      to show flow of input variables

var inquirer = require("inquirer");

// inquirer types
//  input, list, checkbox, confirm, password

inquirer
    .prompt([
        {
            type: "confirm",
            name: "measuringDoor",
            message: "Are you measuring a door?"
        }
    ])
    .then(function(user){
        if(user.measuringDoor == true){
            inquirer
            .prompt([
                {
                    type: "list",
                    name: "doorType",
                    message: "What Type of Door?",
                    choices: ["Interior Door", "Exterior Door", "Storm Door", "Security Door"]
                }
                ]).then(function(dType){
                    console.log("You have chosen " + dType.doorType);

                    // Create Branch for the Interior Door
                    if(dType.doorType == "Interior Door"){
                        inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "interiorDoorType",
                                message: "Please Choose a style of interior Door",
                                choices: ["Slab", "Prehung", "Bi-fold", "Bypass", "Nothing Existed"]
                            }
                        ]).then(function(iDType){
                            if(iDType.interiorDoorType == "Slab"){
                                console.log(iDType.interiorDoorType);
                            }
                            if(iDType.interiorDoorType == "Prehung"){
                                console.log(iDType.interiorDoorType);
                            }
                            if(iDType.interiorDoorType == "Bypass"){
                                console.log(iDType.interiorDoorType);
                                inquirer
                                .prompt([
                                    {
                                        type: "confirm",
                                        name: "hasTransom",
                                        message: "Does it have a Transom?"
                                      }
                                ]).then(function(answers){
                                    if(answers.hasTransom == true){
                                        console.log("Yes it has a transom");
                                        inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "transomShape",
                                                message: "Please Input Transom Shape"
                                            },
                                            {
                                                type: "input",
                                                name: "transomWidth",
                                                message: "Please Input Transom Width (inches)"
                                            },
                                            {
                                                type: "input",
                                                name: "transomHeight",
                                                message: "Please Input Transom Height (inches)"
                                            },
                                            {
                                                type: "confirm",
                                                name: "canReuse",
                                                message: "Can it be reused?"
                                            }
                                        ]).then(function(answers){
                                            console.log("Shape " + answers.transomShape);
                                            console.log("Width " + answers.transomWidth + " in");
                                            console.log("Height " + answers.transomHeight + " in");
                                            if(answers.canReuse == true){
                                                console.log("Can Reuse Transom")
                                            }else console.log("Cannot Reuse Transom");
                                        
                                            // Additional Materials
                                            inquirer
                                            .prompt([
                                                {
                                                    type: "confirm",
                                                    name: "additionalMaterials",
                                                    message: "Any Additional Materials Needed?"
                                                },
                                                {
                                                    type: "input",
                                                    name: "basicLabor",
                                                    message: "Please List basic labor here"
                                                },
                                                {
                                                    type: "input",
                                                    name: "additionalLabor",
                                                    message: "Please List any estimated additional labor"
                                                },

                                            ]).then(function(answers){
                                                console.log("========================================");
                                                console.log("Additional Materials: " + answers.additionalMaterials);
                                                console.log("Basic Labor: " + answers.basicLabor);
                                                console.log("Additional Labor: " + answers.additionalLabor);
                                                console.log("========================================");
                                                console.log("Please attach any needed images");
                                                console.log("PDF Constructed, Successfully sent for review");
                                                console.log("========================================");
                                            })
                                        })
                                    }
                                    else{
                                        console.log("No Transom");
                                    }
                                })
                            }
                            if(iDType.interiorDoorType == "Bi-fold"){
                                console.log("You have chosen " + iDType.interiorDoorType);
                                inquirer
                                .prompt([
                                    {
                                        type: "confirm",
                                        name: "hasTransom",
                                        message: "Does it have a Transom?"
                                      }
                                ]).then(function(answers){
                                    if(answers.hasTransom == true){
                                        console.log("Yes it has a transom");
                                        inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "transomShape",
                                                message: "Please Input Transom Shape"
                                            },
                                            {
                                                type: "input",
                                                name: "transomWidth",
                                                message: "Please Input Transom Width (inches)"
                                            },
                                            {
                                                type: "input",
                                                name: "transomHeight",
                                                message: "Please Input Transom Height (inches)"
                                            },
                                            {
                                                type: "confirm",
                                                name: "canReuse",
                                                message: "Can it be reused?"
                                            }
                                        ]).then(function(answers){
                                            console.log("Shape " + answers.transomShape);
                                            console.log("Width " + answers.transomWidth + " in");
                                            console.log("Height " + answers.transomHeight + " in");
                                            if(answers.canReuse == true){
                                                console.log("Can Reuse Transom")
                                            }else console.log("Cannot Reuse Transom");
                                        
                                            // Additional Materials
                                            inquirer
                                            .prompt([
                                                {
                                                    type: "confirm",
                                                    name: "additionalMaterials",
                                                    message: "Any Additional Materials Needed?"
                                                },
                                                {
                                                    type: "input",
                                                    name: "basicLabor",
                                                    message: "Please List basic labor here"
                                                },
                                                {
                                                    type: "input",
                                                    name: "additionalLabor",
                                                    message: "Please List any estimated additional labor"
                                                },

                                            ]).then(function(answers){
                                                console.log("========================================");
                                                console.log("Additional Materials: " + answers.additionalMaterials);
                                                console.log("Basic Labor: " + answers.basicLabor);
                                                console.log("Additional Labor: " + answers.additionalLabor);
                                                console.log("========================================");
                                                console.log("Please attach any needed images");
                                                console.log("PDF Constructed, Successfully sent for review");
                                                console.log("========================================");
                                            })
                                        })
                                    }
                                    else{
                                        console.log("No Transom");
                                    }
                                })
                            }
                            if(iDType.interiorDoorType == "Nothing Existed"){
                                console.log(iDType.interiorDoorType);
                                inquirer
                                .prompt([
                                    {
                                        type: "confirm",
                                        name: "hasTransom",
                                        message: "Does it have a Transom?"
                                      }
                                ]).then(function(answers){
                                    if(answers.hasTransom == true){
                                        console.log("Yes it has a transom");
                                        inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "transomShape",
                                                message: "Please Input Transom Shape"
                                            },
                                            {
                                                type: "input",
                                                name: "transomWidth",
                                                message: "Please Input Transom Width (inches)"
                                            },
                                            {
                                                type: "input",
                                                name: "transomHeight",
                                                message: "Please Input Transom Height (inches)"
                                            },
                                            {
                                                type: "confirm",
                                                name: "canReuse",
                                                message: "Can it be reused?"
                                            }
                                        ]).then(function(answers){
                                            console.log("Shape " + answers.transomShape);
                                            console.log("Width " + answers.transomWidth + " in");
                                            console.log("Height " + answers.transomHeight + " in");
                                            if(answers.canReuse == true){
                                                console.log("Can Reuse Transom")
                                            }else console.log("Cannot Reuse Transom");
                                        
                                            // Additional Materials
                                            inquirer
                                            .prompt([
                                                {
                                                    type: "confirm",
                                                    name: "additionalMaterials",
                                                    message: "Any Additional Materials Needed?"
                                                },
                                                {
                                                    type: "input",
                                                    name: "basicLabor",
                                                    message: "Please List basic labor here"
                                                },
                                                {
                                                    type: "input",
                                                    name: "additionalLabor",
                                                    message: "Please List any estimated additional labor"
                                                },

                                            ]).then(function(answers){
                                                console.log("========================================");
                                                console.log("Additional Materials: " + answers.additionalMaterials);
                                                console.log("Basic Labor: " + answers.basicLabor);
                                                console.log("Additional Labor: " + answers.additionalLabor);
                                                console.log("========================================");
                                                console.log("Please attach any needed images");
                                                console.log("PDF Constructed, Successfully sent for review");
                                                console.log("========================================");
                                            })
                                        })
                                    }
                                    else{
                                        console.log("No Transom");
                                    }
                                })
                            }
                        })
                    }

                    if(dType.doorType == "Exterior Door"){
                        console.log("Ex");
                    }

                    if(dType.doorType == "Storm Door"){
                        console.log("Storm");
                        inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "interiorDoorType",
                                message: "Please Choose a style of interior Door",
                                choices: ["Single", "Double"]
                            },
                            {
                                type: "input",
                                name: "height",
                                message: "Input Height"
                            },
                            {
                                type: "input",
                                name: "width",
                                message: "Input Width"
                            },
                            {
                                type: "input",
                                name: "location",
                                message: "Input Door Location"
                            },
                            {
                                type: "input",
                                name: "overhang",
                                message: "Overhang?"
                            },
                            {
                                type: "input",
                                name: "exteriorType",
                                message: "Exterior Type?"
                            },
                            {
                                type: "input",
                                name: "existingDamage",
                                message: "Please input any existing damage"
                            },
                            {
                                type: "input",
                                name: "jambDepth",
                                message: "Input Jamb Depth"
                            },
                            {
                                type: "input",
                                name: "sillDepth",
                                message: "Input Sill Depth"
                            },
                            {
                                type: "confirm",
                                name: "sideLights",
                                message: "Does it have Side Lights?"
                            }

                        ]).then(function(answer){
                            // Re list all above inputs here

                            // 
                            inquirer
                                .prompt([
                                    {
                                        type: "confirm",
                                        name: "hasTransom",
                                        message: "Does it have a Transom?"
                                      }
                                ]).then(function(answers){
                                    if(answers.hasTransom == true){
                                        console.log("Yes it has a transom");
                                        inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "transomShape",
                                                message: "Please Input Transom Shape"
                                            },
                                            {
                                                type: "input",
                                                name: "transomWidth",
                                                message: "Please Input Transom Width (inches)"
                                            },
                                            {
                                                type: "input",
                                                name: "transomHeight",
                                                message: "Please Input Transom Height (inches)"
                                            },
                                            {
                                                type: "confirm",
                                                name: "canReuse",
                                                message: "Can it be reused?"
                                            }
                                        ]).then(function(answers){
                                            console.log("Shape " + answers.transomShape);
                                            console.log("Width " + answers.transomWidth + " in");
                                            console.log("Height " + answers.transomHeight + " in");
                                            if(answers.canReuse == true){
                                                console.log("Can Reuse Transom")
                                            }else console.log("Cannot Reuse Transom");
                                        
                                            // Additional Materials
                                            inquirer
                                            .prompt([
                                                {
                                                    type: "confirm",
                                                    name: "additionalMaterials",
                                                    message: "Any Additional Materials Needed?"
                                                },
                                                {
                                                    type: "input",
                                                    name: "basicLabor",
                                                    message: "Please List basic labor here"
                                                },
                                                {
                                                    type: "input",
                                                    name: "additionalLabor",
                                                    message: "Please List any estimated additional labor"
                                                },

                                            ]).then(function(answers){
                                                console.log("========================================");
                                                console.log("Additional Materials: " + answers.additionalMaterials);
                                                console.log("Basic Labor: " + answers.basicLabor);
                                                console.log("Additional Labor: " + answers.additionalLabor);
                                                console.log("========================================");
                                                console.log("Please attach any needed images");
                                                console.log("PDF Constructed, Successfully sent for review");
                                                console.log("========================================");
                                            })
                                        })
                                    }
                                    else{
                                        console.log("No Transom");
                                    }
                                })
                        })
                    }

                    if(dType.doorType == "Security Door"){
                        console.log("Security");
                        inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "interiorDoorType",
                                message: "Please Choose a style of interior Door",
                                choices: ["Single", "Double"]
                            },
                            {
                                type: "input",
                                name: "height",
                                message: "Input Height"
                            },
                            {
                                type: "input",
                                name: "width",
                                message: "Input Width"
                            },
                            {
                                type: "input",
                                name: "location",
                                message: "Input Door Location"
                            },
                            {
                                type: "input",
                                name: "overhang",
                                message: "Overhang?"
                            },
                            {
                                type: "input",
                                name: "exteriorType",
                                message: "Exterior Type?"
                            },
                            {
                                type: "input",
                                name: "existingDamage",
                                message: "Please input any existing damage"
                            },
                            {
                                type: "input",
                                name: "jambDepth",
                                message: "Input Jamb Depth"
                            },
                            {
                                type: "input",
                                name: "sillDepth",
                                message: "Input Sill Depth"
                            },
                            {
                                type: "confirm",
                                name: "sideLights",
                                message: "Does it have Side Lights?"
                            }

                        ]).then(function(answer){
                            // Re list all above inputs here

                            // 
                            inquirer
                                .prompt([
                                    {
                                        type: "confirm",
                                        name: "hasTransom",
                                        message: "Does it have a Transom?"
                                      }
                                ]).then(function(answers){
                                    if(answers.hasTransom == true){
                                        console.log("Yes it has a transom");
                                        inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "transomShape",
                                                message: "Please Input Transom Shape"
                                            },
                                            {
                                                type: "input",
                                                name: "transomWidth",
                                                message: "Please Input Transom Width (inches)"
                                            },
                                            {
                                                type: "input",
                                                name: "transomHeight",
                                                message: "Please Input Transom Height (inches)"
                                            },
                                            {
                                                type: "confirm",
                                                name: "canReuse",
                                                message: "Can it be reused?"
                                            }
                                        ]).then(function(answers){
                                            console.log("Shape " + answers.transomShape);
                                            console.log("Width " + answers.transomWidth + " in");
                                            console.log("Height " + answers.transomHeight + " in");
                                            if(answers.canReuse == true){
                                                console.log("Can Reuse Transom")
                                            }else console.log("Cannot Reuse Transom");
                                        
                                            // Additional Materials
                                            inquirer
                                            .prompt([
                                                {
                                                    type: "confirm",
                                                    name: "additionalMaterials",
                                                    message: "Any Additional Materials Needed?"
                                                },
                                                {
                                                    type: "input",
                                                    name: "basicLabor",
                                                    message: "Please List basic labor here"
                                                },
                                                {
                                                    type: "input",
                                                    name: "additionalLabor",
                                                    message: "Please List any estimated additional labor"
                                                },

                                            ]).then(function(answers){
                                                console.log("========================================");
                                                console.log("Additional Materials: " + answers.additionalMaterials);
                                                console.log("Basic Labor: " + answers.basicLabor);
                                                console.log("Additional Labor: " + answers.additionalLabor);
                                                console.log("========================================");
                                                console.log("Please attach any needed images");
                                                console.log("PDF Constructed, Successfully sent for review");
                                                console.log("========================================");
                                            })
                                        })
                                    }
                                    else{
                                        console.log("No Transom");
                                    }
                                })
                        })
                    }

                })


        }
        else {
            console.log("No bid");
            inquirer
            .prompt([
                {
                    type: "input",
                    name: "reasonForNoBid",
                    message: "Please provide reason if applicable"
                }
            ]).then(function(answer){
                console.log("=============================");
                console.log("Reason for no estimate: " + answer.reasonForNoBid);
                console.log("Thankyou, report sent")
            })
        } 
        
    })