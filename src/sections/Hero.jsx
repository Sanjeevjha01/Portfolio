import { Float } from "@react-three/drei"
import { Astronaut } from "../components/Astronaut"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { damp3 } from "maath/easing"
import { Suspense } from "react"
import Loader from "../components/Loader"

function Rig() {
    return useFrame((state, delta) => {
        damp3(
            state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5,
            delta
        )
    })
}


const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 })
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            <figure
                className="absolute inset-0"
                style={{ width: "100vw", height: '100vh' }}
            >
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader />}>

                        <Float>
                            <Astronaut scale={isMobile && 0.23} position={isMobile && [0, - 1.5, 0]} />
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
};


export default Hero
