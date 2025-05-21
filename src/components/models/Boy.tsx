import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import React from "react";

export function Boy(props: React.ComponentProps<"group">) {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/boy.glb");
  const clone = useMemo(
    () => SkeletonUtils.clone(scene) as THREE.Group,
    [scene]
  );
  const { nodes, materials } = useGraph(clone);

  const jumping = useFBX("/models/Jumping.fbx");
  const standing = useFBX("/models/Standing Greeting.fbx");

  if (jumping.animations[0]) jumping.animations[0].name = "Jumping";
  if (standing.animations[0]) standing.animations[0].name = "Standing";

  const { actions } = useAnimations(
    [...jumping.animations, ...standing.animations],
    group
  );

  useEffect(() => {
    const jump = actions["Jumping"];
    const stand = actions["Standing"];

    if (jump && stand) {
      jump.setLoop(THREE.LoopOnce, 1);
      jump.clampWhenFinished = true;
      jump.reset().play();
      const onJumpFinish = () => {
        stand.reset().play();
      };
      jump.getMixer().addEventListener("finished", onJumpFinish);
      return () => {
        jump.getMixer().removeEventListener("finished", onJumpFinish);
      };
    }
  }, [actions]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips as THREE.Object3D} />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Hair as THREE.Material}
        skeleton={(nodes.Wolf3D_Hair as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Glasses as THREE.Material}
        skeleton={(nodes.Wolf3D_Glasses as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top as THREE.Material}
        skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye as THREE.Material}
        skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeLeft as THREE.SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeLeft as THREE.SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye as THREE.Material}
        skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeRight as THREE.SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeRight as THREE.SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin as THREE.Material}
        skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth as THREE.Material}
        skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetInfluences
        }
      />
    </group>
  );
}

useGLTF.preload("/models/boy.glb");
