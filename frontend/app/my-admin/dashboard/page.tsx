'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';
import { API_URL } from '../../../utils/api';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('contacts');
    const [contacts, setContacts] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [projects, setProjects] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [info, setInfo] = useState<any>({});

    // Form States
    const [newProject, setNewProject] = useState({ title: '', category: '', image: '' });
    const [newTestimonial, setNewTestimonial] = useState({ name: '', role: '', message: '', avatar: '' });
    const [editingId, setEditingId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/my-admin');
            return;
        }

        fetchData(token);
    }, [router]);

    const fetchData = async (token: string) => {
        const headers = { Authorization: `Bearer ${token}` };

        const [contactsRes, quotesRes, infoRes, projectsRes, testimonialsRes] = await Promise.all([
            fetch(`${API_URL}/api/admin/contacts`, { headers }),
            fetch(`${API_URL}/api/admin/quotes`, { headers }),
            fetch(`${API_URL}/api/admin/info`, { headers }),
            fetch(`${API_URL}/api/admin/projects`, { headers }),
            fetch(`${API_URL}/api/admin/testimonials`, { headers })
        ]);

        if (contactsRes.ok) setContacts(await contactsRes.json());
        if (quotesRes.ok) setQuotes(await quotesRes.json());
        if (infoRes.ok) setInfo(await infoRes.json());
        if (projectsRes.ok) setProjects(await projectsRes.json());
        if (testimonialsRes.ok) setTestimonials(await testimonialsRes.json());
    };

    const handleDelete = async (id: string, type: 'contacts' | 'quotes' | 'projects' | 'testimonials') => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        const res = await fetch(`${API_URL}/api/admin/${type}/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        });

        if (res.ok) {
            fetchData(token);
        } else {
            alert('Failed to delete item');
        }
    };

    const handleAddProject = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId
            ? `${API_URL}/api/admin/projects/${editingId}`
            : `${API_URL}/api/admin/projects`;

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(newProject)
        });

        if (res.ok) {
            setNewProject({ title: '', category: '', image: '' });
            setEditingId(null);
            fetchData(token);
        }
    };

    const handleAddTestimonial = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId
            ? `${API_URL}/api/admin/testimonials/${editingId}`
            : `${API_URL}/api/admin/testimonials`;

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(newTestimonial)
        });

        if (res.ok) {
            setNewTestimonial({ name: '', role: '', message: '', avatar: '' });
            setEditingId(null);
            fetchData(token);
        }
    };

    const startEdit = (item: any, type: 'projects' | 'testimonials') => {
        setEditingId(item._id);
        if (type === 'projects') {
            setNewProject({ title: item.title, category: item.category, image: item.image });
        } else {
            setNewTestimonial({ name: item.name, role: item.role, message: item.message, avatar: item.avatar || '' });
        }
    };

    const handleInfoUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        try {
            const res = await fetch(`${API_URL}/api/admin/info`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (res.ok) {
                alert('Info updated successfully!');
            }
        } catch (error) {
            alert('Failed to update info');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        router.push('/my-admin');
    };

    return (
        <div className={styles.dashboard}>
            <aside className={styles.sidebar}>
                <h2>Admin Panel</h2>
                <nav>
                    <button className={activeTab === 'contacts' ? styles.active : ''} onClick={() => setActiveTab('contacts')}>Contacts</button>
                    <button className={activeTab === 'quotes' ? styles.active : ''} onClick={() => setActiveTab('quotes')}>Quotes</button>
                    <button className={activeTab === 'projects' ? styles.active : ''} onClick={() => setActiveTab('projects')}>Projects</button>
                    <button className={activeTab === 'testimonials' ? styles.active : ''} onClick={() => setActiveTab('testimonials')}>Testimonials</button>
                    <button className={activeTab === 'settings' ? styles.active : ''} onClick={() => setActiveTab('settings')}>Settings</button>
                    <button onClick={handleLogout} className={styles.logout}>Logout</button>
                </nav>
            </aside>
            <main className={styles.content}>
                {activeTab === 'contacts' && (
                    <div>
                        <h1>Contact Submissions</h1>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c: any) => (
                                    <tr key={c._id}>
                                        <td>{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.message}</td>
                                        <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button onClick={() => handleDelete(c._id, 'contacts')} className={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'quotes' && (
                    <div>
                        <h1>Quote Submissions</h1>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Budget</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotes.map((q: any) => (
                                    <tr key={q._id}>
                                        <td>{q.contactInfo?.name || q.name}</td>
                                        <td>{q.contactInfo?.email || q.email}</td>
                                        <td>{q.projectType || q.service}</td>
                                        <td>{q.budgetRange || q.budget}</td>
                                        <td>{q.description || '-'}</td>
                                        <td>{new Date(q.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button onClick={() => handleDelete(q._id, 'quotes')} className={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'projects' && (
                    <div>
                        <h1>{editingId ? 'Edit Project' : 'Add Project'}</h1>
                        <form className={styles.form} onSubmit={handleAddProject}>
                            <div className={styles.group}>
                                <label>Title</label>
                                <input value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required />
                            </div>
                            <div className={styles.group}>
                                <label>Category</label>
                                <input value={newProject.category} onChange={e => setNewProject({ ...newProject, category: e.target.value })} required />
                            </div>
                            <div className={styles.group}>
                                <label>Image (URL or Gradient)</label>
                                <input value={newProject.image} onChange={e => setNewProject({ ...newProject, image: e.target.value })} required />
                            </div>
                            <button type="submit" className={styles.btn}>{editingId ? 'Update Project' : 'Add Project'}</button>
                            {editingId && <button type="button" onClick={() => { setEditingId(null); setNewProject({ title: '', category: '', image: '' }); }} className={styles.cancelBtn}>Cancel</button>}
                        </form>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p: any) => (
                                    <tr key={p._id}>
                                        <td>{p.title}</td>
                                        <td>{p.category}</td>
                                        <td>
                                            <button onClick={() => startEdit(p, 'projects')} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(p._id, 'projects')} className={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'testimonials' && (
                    <div>
                        <h1>{editingId ? 'Edit Testimonial' : 'Add Testimonial'}</h1>
                        <form className={styles.form} onSubmit={handleAddTestimonial}>
                            <div className={styles.group}>
                                <label>Name</label>
                                <input value={newTestimonial.name} onChange={e => setNewTestimonial({ ...newTestimonial, name: e.target.value })} required />
                            </div>
                            <div className={styles.group}>
                                <label>Role</label>
                                <input value={newTestimonial.role} onChange={e => setNewTestimonial({ ...newTestimonial, role: e.target.value })} required />
                            </div>
                            <div className={styles.group}>
                                <label>Message</label>
                                <textarea value={newTestimonial.message} onChange={e => setNewTestimonial({ ...newTestimonial, message: e.target.value })} required />
                            </div>
                            <button type="submit" className={styles.btn}>{editingId ? 'Update Testimonial' : 'Add Testimonial'}</button>
                            {editingId && <button type="button" onClick={() => { setEditingId(null); setNewTestimonial({ name: '', role: '', message: '', avatar: '' }); }} className={styles.cancelBtn}>Cancel</button>}
                        </form>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {testimonials.map((t: any) => (
                                    <tr key={t._id}>
                                        <td>{t.name}</td>
                                        <td>{t.role}</td>
                                        <td>{t.message}</td>
                                        <td>
                                            <button onClick={() => startEdit(t, 'testimonials')} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(t._id, 'testimonials')} className={styles.deleteBtn}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'settings' && (
                    <div>
                        <h1>Site Settings</h1>
                        <form className={styles.form} onSubmit={handleInfoUpdate}>
                            <div className={styles.group}>
                                <label>Email</label>
                                <input value={info.email || ''} onChange={e => setInfo({ ...info, email: e.target.value })} />
                            </div>
                            <div className={styles.group}>
                                <label>Phone</label>
                                <input value={info.phone || ''} onChange={e => setInfo({ ...info, phone: e.target.value })} />
                            </div>
                            <div className={styles.group}>
                                <label>Address</label>
                                <input value={info.address || ''} onChange={e => setInfo({ ...info, address: e.target.value })} />
                            </div>
                            <h3>Social Links</h3>
                            <div className={styles.group}>
                                <label>LinkedIn</label>
                                <input value={info.linkedin || ''} onChange={e => setInfo({ ...info, linkedin: e.target.value })} />
                            </div>
                            <div className={styles.group}>
                                <label>Twitter</label>
                                <input value={info.twitter || ''} onChange={e => setInfo({ ...info, twitter: e.target.value })} />
                            </div>
                            <div className={styles.group}>
                                <label>Instagram</label>
                                <input value={info.instagram || ''} onChange={e => setInfo({ ...info, instagram: e.target.value })} />
                            </div>
                            <button type="submit" className={styles.btn}>Save Changes</button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
