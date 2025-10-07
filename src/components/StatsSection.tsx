const StatsSection = () => {
  const stats = [
    { value: "15K+", label: "Students Trained" },
    { value: "95%", label: "Job Placement Rate" },
    { value: "7", label: "Career Paths" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm uppercase tracking-widest text-[#FFD700]">
            Cybersecurity Academy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Master Cybersecurity Skills That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who've launched successful cybersecurity careers through our expert-led training programs and real-world labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-[#FFD700]">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
