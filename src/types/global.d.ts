
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
      IcosahedronGeometry: new (radius?: number, detail?: number) => any;
      OctahedronGeometry: new (radius?: number, detail?: number) => any;
      TetrahedronGeometry: new (radius?: number, detail?: number) => any;
      DodecahedronGeometry: new (radius?: number, detail?: number) => any;
      ConeGeometry: new (radius?: number, height?: number, radialSegments?: number) => any;
      CylinderGeometry: new (radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number) => any;
      MeshPhongMaterial: new (options?: any) => any;
      Mesh: new (geometry: any, material: any) => any;
      AmbientLight: new (color?: number, intensity?: number) => any;
      DirectionalLight: new (color?: number, intensity?: number) => any;
      PointLight: new (color?: number, intensity?: number, distance?: number) => any;
      Vector3: new (x?: number, y?: number, z?: number) => any;
      PCFSoftShadowMap: any;
    };
  }
}

export {};
