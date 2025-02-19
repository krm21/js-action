const core = require('@actions/core');

try {
    // Get input from the action
    const message = core.getInput('message');
    
    // Log the message (GitHub Actions supports ::notice for highlighting)
    console.log(`::notice ::${message}`);
    
} catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
}
