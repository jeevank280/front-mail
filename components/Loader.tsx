export default function Loader() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#999"
          stroke-width="8"
          fill="none"
          stroke-linecap="round"
        />
        <path
          fill="#555"
          d="M 50,15 A 35,35 0 0,1 85,50.0000001 L 85,50 A 35,40 0 0,0 50,10.0000001 Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
}
