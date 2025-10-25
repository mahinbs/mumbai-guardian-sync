import { Link } from "react-router-dom";
import { Shield, Users, UserCheck } from "lucide-react";

const Landing = () => {
  const roles = [
    {
      title: "Police Officer",
      description: "Attendance & QR ID",
      icon: Shield,
      path: "/police/login",
      gradient: "from-primary to-primary/60",
      glow: "glow-primary",
    },
    {
      title: "Citizen",
      description: "Verify Officers & SOS",
      icon: Users,
      path: "/citizen/home",
      gradient: "from-success to-success/60",
      glow: "glow-success",
    },
    {
      title: "Admin",
      description: "Management Portal",
      icon: UserCheck,
      path: "/admin/login",
      gradient: "from-secondary to-secondary/60",
      glow: "glow-secondary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo & Title */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-2 border-primary mb-6 animate-float">
          <Shield className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-rotate bg-[length:200%_auto]">
          Mumbai Police
        </h1>
        <p className="text-xl text-muted-foreground font-badge">Guardian Sync</p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {roles.map((role, index) => (
          <Link
            key={role.title}
            to={role.path}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${role.glow} hover:shadow-2xl animate-scale-in`}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <role.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{role.title}</h2>
              <p className="text-muted-foreground">{role.description}</p>
              <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform">
                Continue
                <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-muted-foreground animate-fade-in">
        Demo System • Mumbai Police Department
      </p>
    </div>
  );
};

export default Landing;
