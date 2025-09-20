import React, { useState } from 'react'

export default function Settings() {
    const [profile, setProfile] = useState({ name: 'Student', email: 'student@example.com' })
    const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' })

    function saveProfile(e) {
        e.preventDefault()
        alert('Profile updated (mock)')
    }

    function changePassword(e) {
        e.preventDefault()
        if (passwords.newPass !== passwords.confirm) {
            alert('New password and confirm do not match')
            return
        }
        alert('Password changed (mock)')
        setPasswords({ current: '', newPass: '', confirm: '' })
    }

    return (
        <div className="container-fluid">
            <h5>Settings</h5>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <div className="card card-surface p-3">
                        <h6>Update Profile</h6>
                        <form onSubmit={saveProfile} className="mt-2">
                            <div className="mb-2">
                                <label className="form-label small">Name</label>
                                <input className="form-control" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label small">Email</label>
                                <input className="form-control" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} />
                            </div>
                            <button className="btn btn-primary btn-sm">Save</button>
                        </form>
                    </div>
                </div>


                <div className="col-12 col-md-6">
                    <div className="card card-surface p-3">
                        <h6>Change Password</h6>
                        <form onSubmit={changePassword} className="mt-2">
                            <div className="mb-2">
                                <label className="form-label small">Current Password</label>
                                <input type="password" className="form-control" value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label small">New Password</label>
                                <input type="password" className="form-control" value={passwords.newPass} onChange={e => setPasswords(p => ({ ...p, newPass: e.target.value }))} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label small">Confirm New Password</label>
                                <input type="password" className="form-control" value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} />
                            </div>
                            <button className="btn btn-secondary btn-sm">Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}