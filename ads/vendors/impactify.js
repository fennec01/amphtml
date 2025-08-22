import {loadScript, validateData} from '#3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function impactify(global, data) {
  validateData(data, ['appId', 'format', 'style'], ['slotId']);

  const doc = global.document;
  const container = doc.createElement('div');
  const slotId =
    data['slotId'] || `impactify-slot-${Math.floor(Math.random() * 10000)}`;
  container.id = slotId;
  doc.getElementById('c').appendChild(container);

  global.impactifyTag = global.impactifyTag || [];
  global.impactifyTag.push({
    appId: data['appId'],
    format: data['format'],
    style: data['style'],
    slotId,
    onNoAd: () => {},
  });

  loadScript(global, 'https://ad.impactify.io/static/ad/tag.js');
}
