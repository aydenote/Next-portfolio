import Lottie from 'react-lottie-player';
import lottieJson from '../public/animation.json';
import callJson from '../public/contact-call.json';
import emailJson from '../public/contact-email.json';
import blogJson from '../public/contact-blog.json';

export function HeroAnimation() {
  return <Lottie loop animationData={lottieJson} play style={{ margin: 'auto' }} />;
}

export function CallAnimation() {
  return <Lottie loop animationData={callJson} play style={{ margin: 'auto', borderBottom: '1px solid grey' }} />;
}

export function EmailAnimation() {
  return <Lottie loop animationData={emailJson} play style={{ margin: 'auto', borderBottom: '1px solid grey' }} />;
}

export function BlogAnimation() {
  return <Lottie loop animationData={blogJson} play style={{ margin: 'auto', borderBottom: '1px solid grey' }} />;
}
