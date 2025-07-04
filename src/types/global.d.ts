
declare global {
  interface Window {
    gsap: {
      fromTo: (targets: any, fromVars: any, toVars: any) => any;
      registerPlugin: (plugin: any) => void;
    };
    ScrollTrigger: any;
    THREE: {
      Scene: new () => any;
      PerspectiveCamera: new (fov: number, aspect: number, near: number, far: number) => any;
      WebGLRenderer: new (options?: any) => any;
      BoxGeometry: new (width?: number, height?: number, depth?: number) => any;
      SphereGeometry: new (radius?: number, widthSegments?: number, heightSegments?: number) => any;
      OctahedronGeometry: new (radius?: number, detail?: number) => any;
      TetrahedronGeometry: new (radius?: number, detail?: number) => any;
      MeshPhongMaterial: new (options?: any) => any;
      Mesh: new (geometry: any, material: any) => any;
      AmbientLight: new (color?: number, intensity?: number) => any;
      DirectionalLight: new (color?: number, intensity?: number) => any;
    };
  }
}

export {};
