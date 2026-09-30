"use client";

import { useState } from "react";
import { Copy, Check, Plus } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { initialApiKeys, initialConnectedApps } from "@/lib/dashboard/settingsData";
import type { ApiKeyItem, ConnectedApp } from "@/types/settings";

export default function IntegrationsSection() {
  const [apiKeys, setApiKeys] = useState<ApiKeyItem[]>(initialApiKeys);
  const [apps, setApps] = useState<ConnectedApp[]>(initialConnectedApps);
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyId(id);
    setTimeout(() => setCopiedKeyId(null), 2000);
  };

  const handleGenerateKey = () => {
    const newKey: ApiKeyItem = {
      id: `key-${Date.now()}`,
      name: "Custom Integration Key",
      prefix: `dk_live_${Math.random().toString(36).substring(2, 8)}••••••••`,
      lastUsed: "Just created",
      createdDate: "Today",
    };
    setApiKeys((prev) => [newKey, ...prev]);
  };

  const handleRevokeKey = (id: string) => {
    if (confirm("Revoke this API Key? Any service using this key will immediately lose access.")) {
      setApiKeys((prev) => prev.filter((k) => k.id !== id));
    }
  };

  const toggleAppConnection = (id: string) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, connected: !app.connected } : app))
    );
  };

  return (
    <div className="space-y-5">
      {/* API Keys */}
      <Card variant="default" className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                Developer API Keys
              </h3>
              <span className="rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)]">
                REST API v2
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Authenticate requests to the Donezo programmatic webhooks and endpoints.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGenerateKey}
            className="flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-primary)] transition-colors"
          >
            <Plus size={14} strokeWidth={2.4} />
            <span>Generate New Key</span>
          </button>
        </div>

        <div className="divide-y divide-[var(--color-border-light)] text-xs">
          {apiKeys.map((key) => (
            <div key={key.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
              <div>
                <p className="font-semibold text-[var(--color-text-primary)]">
                  {key.name}
                </p>
                <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-[var(--color-text-secondary)]">
                  <span className="rounded-md bg-[var(--color-background-soft)] px-2 py-0.5 border border-[var(--color-border-light)]">
                    {key.prefix}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(key.id, key.prefix)}
                    className="flex items-center gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-primary-dark)]"
                  >
                    {copiedKeyId === key.id ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-[10px] font-semibold text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-[var(--color-text-muted)]">
                <span>Last used: {key.lastUsed}</span>
                <button
                  type="button"
                  onClick={() => handleRevokeKey(key.id)}
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  Revoke
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Connected Integrations */}
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Connected Services"
          subtitle="Sync repositories, receive sprint notifications, and connect payment providers"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex items-start justify-between rounded-xl border border-[var(--color-border-light)] p-3.5 bg-white transition-colors hover:border-[var(--color-primary)]"
            >
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)]">
                  {app.name}
                </h4>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  {app.category}
                </p>
                <span className="text-[10px] text-[var(--color-text-light)] mt-1.5 block">
                  {app.lastSync}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toggleAppConnection(app.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                  app.connected
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
                }`}
              >
                {app.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
