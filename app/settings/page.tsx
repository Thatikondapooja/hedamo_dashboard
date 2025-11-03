"use client"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Email Notifications</label>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="ml-2 text-sm">Receive updates about product analysis</span>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Monthly Reports</label>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="ml-2 text-sm">Get monthly transparency reports</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <h2 className="text-xl font-semibold">Display Settings</h2>
          <p className="text-sm text-muted-foreground">
            Use the dark mode toggle in the top navigation to change themes
          </p>
        </div>
      </div>
    </div>
  )
}
