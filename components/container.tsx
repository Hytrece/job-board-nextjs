const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen mx-auto flex items-center flex-col min-h-screen">
      {children}
    </div>
  );
};
export default Container;
