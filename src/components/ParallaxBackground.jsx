import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import skyImage from '../assets/heroImages/sky.jpg'
import mountain1 from '../assets/heroImages/mountain-1.png'
import mountain2 from '../assets/heroImages/mountain-2.png'
import mountain3 from '../assets/heroImages/mountain-3.png'
import planets from '../assets/heroImages/planets.png'

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 })
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"])
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"])
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"])
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"])
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* Background Sky */}
                <div
                    className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: `url(${skyImage})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover"
                    }}
                />
                {/* Mountain Layer 3*/}
                <motion.div
                    className='absolute inset-0 -z-40'
                    style={{
                        backgroundImage: `url(${mountain3})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }}
                />
                {/* Planets */}
                <motion.div
                    className='absolute inset-0 -z-30'
                    style={{
                        backgroundImage: `url(${planets})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetsX
                    }}
                />
                {/* Mountain Layer 2 */}
                <motion.div
                    className='absolute inset-0 -z-20'
                    style={{
                        backgroundImage: `url(${mountain2})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y
                    }}
                />
                {/* Mountain Layer 1 */}
                <motion.div
                    className='absolute inset-0 -z-10'
                    style={{
                        backgroundImage: `url(${mountain1})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y
                    }}
                />
            </div>

        </section>
    )
}

export default ParallaxBackground;
