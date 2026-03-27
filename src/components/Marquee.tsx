

type props = {
  text: string
}
const Marquee = ({ text }: props) => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", background: "#7F563F", padding: "10px 0", color: "#fff", position: "sticky", top: 0 }}>
      <div style={{
        display: "inline-block",
        paddingLeft: "100%",   // start off-screen
        animation: "marquee 15s linear infinite"
      }}>
        {text}
      </div>

      {/* CSS keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;