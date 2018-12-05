import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the shareable-links extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'shareable-links',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension shareable-links is activated!');
  }
};

export default extension;
