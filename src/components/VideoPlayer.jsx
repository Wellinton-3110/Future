export function VideoPlayer(props) {
  return (
    <div>
      <video className="w-[100%] h-[600px]" controls>
        <source src={props.src} type={props.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
