"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90682],{336256:(e,a,n)=>{n.r(a),n.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-01bfb78c","path":"/guide/configuration/device-availability.html","title":"Device-Availability","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Availability advanced configuration","slug":"availability-advanced-configuration","link":"#availability-advanced-configuration","children":[]},{"level":2,"title":"State retrieval","slug":"state-retrieval","link":"#state-retrieval","children":[]},{"level":2,"title":"Performance considerations","slug":"performance-considerations","link":"#performance-considerations","children":[]},{"level":2,"title":"Availability payload","slug":"availability-payload","link":"#availability-payload","children":[]},{"level":2,"title":"Groups","slug":"groups","link":"#groups","children":[]}],"git":{"updatedTime":1701424443000},"filePathRelative":"guide/configuration/device-availability.md"}')},362040:(e,a,n)=>{n.r(a),n.d(a,{default:()=>l});var i=n(166252);const s=[(0,i.uE)('<h1 id="device-availability" tabindex="-1"><a class="header-anchor" href="#device-availability" aria-hidden="true">#</a> Device-Availability</h1><p>The availability feature checks whether your devices are online. The availability state of a device is published to <code>zigbee2mqtt/[FRIENDLY_NAME]/availability</code> (this message is a retained MQTT message).</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Optional: Enable the availability feature (default = false)</span>\n<span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The availability feature works differently for active and passive devices.</p><ul><li>Active devices (routers or mains powered end devices): by default they have to check-in every 10 minutes. If they don&#39;t, they will be pinged, if that fails the device will be marked as <code>offline</code>.</li><li>Passive devices (everything that is not an active device, mostly battery powered devices): these devices need to check-in every 25 hours, they cannot be pinged so if they don&#39;t they will be marked as <code>offline</code>.</li></ul><p>Note that this timeout is persisted between Zigbee2MQTT restarts. So if you e.g. stop Zigbee2MQTT for longer than 10 minutes, all yours active devices will be marked as <code>offline</code> initially.</p><h2 id="availability-advanced-configuration" tabindex="-1"><a class="header-anchor" href="#availability-advanced-configuration" aria-hidden="true">#</a> Availability advanced configuration</h2><p>Instead of setting <code>availability: true</code> in your <code>configuration.yaml</code> you can provide a more advanced configuration:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Note: all options are optional</span>\n<span class="token key atrule">availability</span><span class="token punctuation">:</span>\n  <span class="token key atrule">active</span><span class="token punctuation">:</span>\n    <span class="token comment"># Time after which an active device will be marked as offline in</span>\n    <span class="token comment"># minutes (default = 10 minutes)</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10</span>\n  <span class="token key atrule">passive</span><span class="token punctuation">:</span>\n    <span class="token comment"># Time after which a passive device will be marked as offline in</span>\n    <span class="token comment"># minutes (default = 1500 minutes aka 25 hours)</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">1500</span>\n\n<span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_bulb&#39;</span>\n    <span class="token comment"># Set availability: false to disable the availability feature for a specific device</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span>\n    <span class="token comment"># Change availability timeout to 3 minutes for this device only</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span>\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to enable the availability feature for only certain devices, don&#39;t add <code>availability: true</code> in your <code>configuration.yaml</code> but specify it for that device only, e.g.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span>\n    <span class="token comment"># Enable avaiability for just &#39;my_switch&#39;</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-retrieval" tabindex="-1"><a class="header-anchor" href="#state-retrieval" aria-hidden="true">#</a> State retrieval</h2><p>When the availability feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power. The following attributes will be read: <code>state</code>, <code>brightness</code>, <code>color_temp</code> and <code>color</code>.</p><h2 id="performance-considerations" tabindex="-1"><a class="header-anchor" href="#performance-considerations" aria-hidden="true">#</a> Performance considerations</h2><ul><li>The pinging can be heavy on the coordinator, especially if you are using a CC2530 or CC2531 adapter.</li><li>Higher <code>timeout</code> for active devices results in less pinging so less stress on the coordinator.</li></ul><h2 id="availability-payload" tabindex="-1"><a class="header-anchor" href="#availability-payload" aria-hidden="true">#</a> Availability payload</h2><p>By default the published availability payload is in legacy mode (<code>online</code>/<code>offline</code>). If the legacy mode is disabled the payload will be a JSON object (<code>{&quot;state&quot;:&quot;online&quot;}</code>/<code>{&quot;state&quot;:&quot;offline&quot;}</code>). Note that this changes the payload for <code>zigbee2mqtt/bridge/state</code> and <code>zigbee2mqtt/MY_DEVICE/availability</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Whether to use legacy mode for the availability message payload (default: true)</span>\n  <span class="token comment"># true = online/offline</span>\n  <span class="token comment"># false = {&quot;state&quot;:&quot;online&quot;} / {&quot;state&quot;:&quot;offline&quot;}</span>\n  <span class="token key atrule">legacy_availability_payload</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> Groups</h2><p>When enabling device availability, availability will also be enabled for groups. A group is marked as available when at least one device in it is available.</p>',20)],t={},l=(0,n(983744).Z)(t,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,s)}]])}}]);