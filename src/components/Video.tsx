export default function Video({ src, ...props }: { src: string } & React.ComponentPropsWithoutRef<'video'>) {
  return (
    <video
      src={`https://object.xyspg.moe/video/sora/${src}`}
      autoPlay
      muted
      controls
      className="w-full"
      {...props}
    />
  )
}