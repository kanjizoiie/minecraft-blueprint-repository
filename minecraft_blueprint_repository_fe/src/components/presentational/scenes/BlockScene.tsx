import * as React from "react";
import * as THREE from "three";


export class BlockScene extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    mount = null;
    scene = null;
    camera = null;
    renderer = null;
    cube = null;
    frameId = null;

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        //ADD SCENE
        this.scene = new THREE.Scene();
    
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
        this.camera.position.z = 1.5
        
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        //ADD CUBE
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    animate = () => {
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render(): JSX.Element {
        return (
            <div
                style={{ width: 'auto', height: '256px', borderRadius: '10px' }}
                ref={(mount) => { this.mount = mount }}
            />
        );
    }
}