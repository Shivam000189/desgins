"use client";

import { useState } from "react";
import { ShieldCheck, Lock, Smartphone, Laptop, Check } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";

export default function SecuritySection() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSaved, setIsPasswordSaved] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsPasswordSaved(true);
    setTimeout(() => {
      setIsPasswordSaved(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 2000);
  };

  return (
    <div className="space-y-5">
      {/* 2FA Banner */}
      <Card variant="default" className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <ShieldCheck size={20} strokeWidth={2.4} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Two-Factor Authentication (2FA)
                </h3>
                <span className="rounded-full bg-[var(--color-primary-light)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary-dark)]">
                  Enabled
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Your account is protected with hardware security keys and TOTP authenticator apps.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => alert("Configure 2FA settings...")}
            className="rounded-xl border border-[var(--color-border)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-background-soft)]"
          >
            Reconfigure 2FA
          </button>
        </div>
      </Card>

      {/* Change Password */}
      <form onSubmit={handlePasswordSubmit}>
        <Card variant="default" className="p-5 sm:p-6">
          <CardHeader
            title="Change Account Password"
            subtitle="Choose a strong password with at least 12 characters including symbols"
            icon={
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]">
                <Lock size={16} strokeWidth={2.2} />
              </div>
            }
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Current Password *
              </label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                New Password *
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-[var(--color-text-secondary)] mb-1">
                Confirm New Password *
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-9 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-3 text-xs text-[var(--color-text-primary)] focus:bg-white focus:border-[var(--color-primary)] focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end border-t border-[var(--color-border-light)] pt-4">
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-[var(--color-primary-dark)] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-primary)] transition-all"
            >
              {isPasswordSaved ? (
                <>
                  <Check size={14} strokeWidth={2.4} />
                  <span>Password Updated!</span>
                </>
              ) : (
                <span>Update Password</span>
              )}
            </button>
          </div>
        </Card>
      </form>

      {/* Active Sessions */}
      <Card variant="default" className="p-5 sm:p-6">
        <CardHeader
          title="Active Sessions"
          subtitle="Devices and browsers currently logged into your account"
        />

        <div className="divide-y divide-[var(--color-border-light)] text-xs">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-primary-dark)]">
                <Laptop size={16} />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
                  <span>Windows 11 · Chrome 134</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.2 text-[9px] font-bold text-emerald-700">
                    Current Device
                  </span>
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  San Francisco, USA · IP 192.168.1.1 · Active now
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]">
                <Smartphone size={16} />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text-primary)]">
                  Apple iPhone 16 Pro · iOS App
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  San Francisco, USA · Last active 42 mins ago
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert("Session revoked.")}
              className="text-xs font-semibold text-red-600 hover:underline"
            >
              Revoke
            </button>
          </div>
        </div>

        <div className="mt-4 border-t border-[var(--color-border-light)] pt-3 text-right">
          <button
            type="button"
            onClick={() => alert("All other sessions revoked successfully.")}
            className="text-xs font-semibold text-red-600 hover:underline"
          >
            Sign out of all other sessions
          </button>
        </div>
      </Card>
    </div>
  );
}
