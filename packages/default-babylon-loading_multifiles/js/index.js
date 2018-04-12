var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

BABYLON.SceneLoader.Load("assets/", "default-scene.babylon", engine, function (scene) {                
        //camera parameters
        //we assume camera is include in .babylon file
        scene.activeCamera.attachControl(canvas);
        scene.activeCamera.fov = 1.2;
        scene.activeCamera.speed = 0.2;

        scene.clearColor = new BABYLON.Color3(1, 1, 1);
        scene.ambientColor = new BABYLON.Color3.White;
                
        engine.runRenderLoop(function() {
                scene.render();
        });

        window.addEventListener("resize", function () {
                engine.resize();
        });
});
