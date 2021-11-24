import {IfcViewerAPI} from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container});
viewer.addAxes();
viewer.addGrid();