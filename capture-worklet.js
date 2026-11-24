// Capture du son de la basse, dans le fil audio du navigateur : les échantillons sont envoyés à la page
// par paquets, avec le numéro du premier (currentFrame). Ce numéro est sur l'horloge du contexte audio,
// la même que celle du clic : c'est ce qui permet de dater une note à l'échantillon près, même si la
// page est occupée à dessiner.
class Capture extends AudioWorkletProcessor {
	constructor() { super(); this.b = new Float32Array(512); this.n = 0; this.s = 0; }
	process(inputs) {
		const c = inputs[0] && inputs[0][0];
		if (!c) return true;
		if (this.n && currentFrame !== this.s + this.n) this.flush();
		if (!this.n) this.s = currentFrame;
		this.b.set(c, this.n);
		this.n += c.length;
		if (this.n >= 512) this.flush();
		return true;
	}
	flush() { this.port.postMessage({ f: this.s, d: this.b.slice(0, this.n) }); this.n = 0; }
}
registerProcessor('capture', Capture);
