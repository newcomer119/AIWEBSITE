export const Button = (props : React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-4 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] hover:from-[#1a0e30] hover:to-[#4e228f] transition-all duration-200">
      {/* Button borders and glow effects */}
      <div className="absolute inset-0 rounded-lg">
        <div className="border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border absolute inset-0 border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span className="relative z-10">{props.children}</span>
    </button>
  );
};
