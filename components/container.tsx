const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] mx-auto bg-background flex flex-col min-h-screen">
      {children}
    </div>
  );
};
export default Container;
