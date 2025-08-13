import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <DotLottieReact
        src="/loading.lottie"
        loop
        autoplay
        style={{ width: '120px', height: '120px' }}
      />
    </div>
  );
};
