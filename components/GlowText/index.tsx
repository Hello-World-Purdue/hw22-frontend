export function GlowText({children}: {children?: any}) {
  return (
    <h2
      style={{textShadow: "4px 2px 0px #ef5da8", lineHeight: "1.1"}}
      className={
        "text-center text-[4rem] m-0 text-[#fcddec] belle"
      }
    >
      {children}
    </h2>
  );
}
