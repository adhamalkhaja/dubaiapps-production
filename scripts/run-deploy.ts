import CloudflareDeploymentManager from './deploy.ts';

const deployer = new CloudflareDeploymentManager();
deployer.deploy().catch((error) => {
	console.error('Unexpected error:', error);
	process.exit(1);
});
