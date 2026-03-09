"use client";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { getBusinessByOwner, getCampaignsByBusiness, addCampaign, toggleCampaignActive, ReviewRequestCampaign, Business } from "@/lib/store";
import { Smartphone, Mail, QrCode, Plus, Play, Pause, X } from "lucide-react";

export default function RequestsPage() {
    const { user } = useAuth();
    const [business, setBusiness] = useState<Business | null>(null);
    const [campaigns, setCampaigns] = useState<ReviewRequestCampaign[]>([]);
    const [showModal, setShowModal] = useState(false);

    // Form state
    const [newCampaign, setNewCampaign] = useState({ name: "", channel: "email", templateSubject: "How was your stay?", templateBody: "Hi there! We hope you enjoyed your recent stay with us. If you have 60 seconds, we'd love it if you could share your experience.", sendDelayHours: 24 });

    const refresh = () => {
        if (!user) return;
        const biz = getBusinessByOwner(user.id);
        if (!biz) return;
        setBusiness(biz);
        setCampaigns(getCampaignsByBusiness(biz.id));
    };

    useEffect(() => { refresh(); }, [user]);

    const handleCreateCampaign = (e: React.FormEvent) => {
        e.preventDefault();
        if (!business) return;
        addCampaign({
            businessId: business.id,
            name: newCampaign.name,
            channel: newCampaign.channel as any,
            templateSubject: newCampaign.channel === "email" ? newCampaign.templateSubject : undefined,
            templateBody: newCampaign.templateBody,
            sendDelayHours: newCampaign.sendDelayHours,
            isActive: true,
        });
        setShowModal(false);
        setNewCampaign({ name: "", channel: "email", templateSubject: "How was your stay?", templateBody: "Hi there!", sendDelayHours: 24 });
        refresh();
    };

    const handleToggle = (id: string, currentActive: boolean) => {
        toggleCampaignActive(id, !currentActive);
        refresh();
    };

    if (!business) {
        return <div className="flex items-center justify-center p-12"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>;
    }

    const channelDetails = {
        email: { icon: Mail, label: "Email Automation" },
        sms: { icon: Smartphone, label: "SMS Automation" },
        qr: { icon: QrCode, label: "QR Code Generaton" },
    };

    return (
        <div className="p-8 h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Review Requests</h1>
                    <p className="text-muted-foreground text-sm">Automate sending review invitations to recent guests.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Plus className="w-4 h-4" />
                    New Campaign
                </button>
            </div>

            {campaigns.length === 0 ? (
                <div className="glass-card rounded-2xl p-12 text-center border-dashed border-2">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">No Campaigns Yet</h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">Create your first automated email or SMS campaign to start requesting more reviews.</p>
                    <button onClick={() => setShowModal(true)} className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                        Create Automation
                    </button>
                </div>
            ) : (
                <div className="grid gap-4">
                    {campaigns.map(camp => {
                        const Icon = channelDetails[camp.channel as keyof typeof channelDetails].icon;
                        return (
                            <div key={camp.id} className="glass-card rounded-2xl p-5 border border-border flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-white">{camp.name}</h3>
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${camp.isActive ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-muted text-muted-foreground uppercase"
                                                }`}>
                                                {camp.isActive ? "Active" : "Paused"}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground/80">Sends via <span className="capitalize text-white">{camp.channel}</span> exactly {camp.sendDelayHours} hours after trigger.</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleToggle(camp.id, camp.isActive)} className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-white transition-colors">
                                        {camp.isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <form onSubmit={handleCreateCampaign} className="glass-card rounded-2xl p-6 w-full max-w-lg border border-border max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Create Automation</h3>
                            <button type="button" onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-white"><X className="w-5 h-5" /></button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1">Campaign Name</label>
                                <input required value={newCampaign.name} onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} type="text" placeholder="e.g. Post-Checkout Email" className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-sm" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1">Channel</label>
                                    <select value={newCampaign.channel} onChange={e => setNewCampaign({ ...newCampaign, channel: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm">
                                        <option value="email">Email</option>
                                        <option value="sms">SMS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1">Delay (Hours after checkout)</label>
                                    <input required type="number" min="1" value={newCampaign.sendDelayHours} onChange={e => setNewCampaign({ ...newCampaign, sendDelayHours: parseInt(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm" />
                                </div>
                            </div>

                            {newCampaign.channel === "email" && (
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1">Email Subject</label>
                                    <input required value={newCampaign.templateSubject} onChange={e => setNewCampaign({ ...newCampaign, templateSubject: e.target.value })} type="text" className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm" />
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1">Message Body</label>
                                <textarea required rows={4} value={newCampaign.templateBody} onChange={e => setNewCampaign({ ...newCampaign, templateBody: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm resize-none" />
                                <p className="text-[10px] text-muted-foreground mt-1">Review link will be automatically appended to the end.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 mt-8">
                            <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground">Cancel</button>
                            <button type="submit" className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90">Activate Campaign</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
