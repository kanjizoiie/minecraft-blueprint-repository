import * as React from "react";
import * as THREE from "three";


export interface IBlockSceneProps {
    materialImageURL?: string
}

export class BlockScene extends React.Component<IBlockSceneProps, {}> {
    constructor(props: any) {
        super(props);
    }

    mount: HTMLDivElement = null;
    scene: THREE.Scene = null;
    camera: THREE.PerspectiveCamera = null;
    renderer: THREE.WebGLRenderer = null;
    cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> = null;
    frameId: number = null;

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
        let material: THREE.MeshBasicMaterial = null;

        if (this.props.materialImageURL) {
            const texture = new THREE.TextureLoader().load(this.props.materialImageURL);
            material = new THREE.MeshBasicMaterial({ map: texture });
        } else {
            material = new THREE.MeshBasicMaterial({ color: '#FF00FF' });
        }

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