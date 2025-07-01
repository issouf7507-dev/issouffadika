module.exports = {
  apps: [
    {
      name: "issouffadika",
      script: "npm",
      args: "start",
      cwd: "/var/www/webapp/issouffadika/current",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "/var/www/webapp/issouffadika/logs/err.log",
      out_file: "/var/www/webapp/issouffadika/logs/out.log",
      log_file: "/var/www/webapp/issouffadika/logs/combined.log",
      time: true,
    },
  ],
};
