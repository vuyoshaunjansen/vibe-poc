document.addEventListener('DOMContentLoaded', () => {
    console.log("Vibe PoC Loaded! Final Iteration ++ Update. Current time: " + new Date().toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg' }));

    // Helper function for date formatting
    function formatDate(isoString) {
        if (!isoString) return "Date & Time TBD";
        try {
            const date = new Date(isoString);
            if (isNaN(date.getTime())) { // Check for invalid date
                return "Invalid Date";
            }
            const optionsDate = { weekday: 'short', month: 'short', day: 'numeric' }; // Simplified date
            const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
            return `${date.toLocaleDateString(undefined, optionsDate)} at ${date.toLocaleTimeString(undefined, optionsTime)}`;
        } catch (e) {
            console.error("Error formatting date:", isoString, e);
            return "Date Error";
        }
    }

    // Mock Data
    const profiles = [
        { id: 'p1', name: 'Alex R.', profilePictureUrl: 'assets/images/profiles/user_profile_1.jpg', isFriend: true, hostedEventId: 'e1_formula' },
        { id: 'p2', name: 'Maria V.', profilePictureUrl: 'assets/images/profiles/user_profile_2.jpg', isFriend: true, hostedEventId: 'e2_volleyball' },
        { id: 'p3', name: 'Sam H.', profilePictureUrl: 'assets/images/profiles/user_profile_3.jpg', isFriend: true, hostedEventId: 'e3_hiking' },
        { id: 'p4', name: 'Chloe P.', profilePictureUrl: 'assets/images/profiles/user_profile_4.jpg', isFriend: true, hostedEventId: 'e4_party' },
        { id: 'p5', name: 'Ben S.', profilePictureUrl: 'assets/images/profiles/user_profile_5.jpg', isFriend: true, hostedEventId: 'e5_surfing' },
        { id: 'p6', name: 'Luis G.', profilePictureUrl: 'assets/images/profiles/user_profile_6.jpg', isFriend: false, hostedEventId: 'e6_roadtrip' },
        { id: 'p7', name: 'Aisha K.', profilePictureUrl: 'assets/images/profiles/user_profile_7.jpg', isFriend: false, hostedEventId: 'e7_safari' },
        { id: 'p8', name: 'Kenji T.', profilePictureUrl: 'assets/images/profiles/user_profile_8.jpg', isFriend: false, hostedEventId: 'e8_house_party' },
        { id: 'p9', name: 'Olivia W.', profilePictureUrl: 'assets/images/profiles/user_profile_9.jpg', isFriend: false, hostedEventId: 'e9_wakeboarding' }
    ];

    const events = [
        { id: 'e5_surfing', title: 'Sunrise Surf Bliss', activityType: 'Surfing', imageUrl: 'assets/images/events/event_surfing.jpg', hostProfileId: 'p5', locationCity: 'Cape Town', dateTime: '2025-07-10T06:30:00', description: 'Catch the early morning waves. Pure bliss and good vibes. All levels welcome!\nThis is a great opportunity to meet fellow surfers and enjoy the beautiful Cape Town coastline.', attendees: ['p1', 'p3'], interestedUsers: ['p2', 'p4'], comments: [{profileId: 'p1', user: 'Alex R.', text: 'So stoked for this! Count me in.'}, {profileId: 'p2', user: 'Maria V.', text: 'Sounds amazing, see you there!'}] },
        { id: 'e3_hiking', title: 'Epic Mountain Hike', activityType: 'Hiking', imageUrl: 'assets/images/events/event_hiking.jpg', hostProfileId: 'p3', locationCity: 'Cape Town', dateTime: '2025-07-12T09:00:00', description: 'Conquer the peak! Challenging but rewarding hike with breathtaking views. Bring water, snacks, and your spirit of adventure. We will explore some hidden trails.', attendees: ['p5'], interestedUsers: ['p1', 'p7'], comments: [{profileId: 'p7', user: 'Aisha K.', text: 'How long is the hike roughly?'}, {profileId: 'p3', user: 'Sam H.', text: 'About 4-5 hours round trip!'}] },
        { id: 'c_ct1', title: 'Post-Surf Beers & Sunset Chills', activityType: 'Social Hangout', imageUrl: 'assets/images/events/event_capetown_community_1.jpg', hostProfileId: null, locationCity: 'Cape Town', dateTime: '2025-07-10T18:00:00', description: 'Unwind with cold beers and a stunning sunset after a day in the waves. Pure Cape Town vibes at their best.', attendees: [], interestedUsers: ['p5'], comments: [] },
        { id: 'e1_formula', title: 'F1 & Karting Thrills', activityType: 'Formula', imageUrl: 'assets/images/events/event_formula.jpg', hostProfileId: 'p1', locationCity: 'Barcelona', dateTime: '2025-07-20T14:00:00', description: 'Grand Prix watch party followed by high-speed go-karting action. Adrenaline guaranteed for all F1 fans!', attendees: ['p4'], interestedUsers: ['p2', 'p5', 'p6'], comments: [] },
        { id: 'c_bcn1', title: 'Literary Escape in the Park', activityType: 'Book Club', imageUrl: 'assets/images/events/event_barcelona_community_1.jpg', hostProfileId: null, locationCity: 'Barcelona', dateTime: '2025-07-15T16:30:00', description: 'Join fellow bookworms in Parc de la Ciutadella to discuss this month\'s captivating read. Bring a blanket and your insights!', attendees: [], interestedUsers: ['p1'], comments: [] },
        { id: 'e2_volleyball', title: 'Beach Volleyball Showdown', activityType: 'Volleyball', imageUrl: 'assets/images/events/event_volleyball.jpg', hostProfileId: 'p2', locationCity: 'Rio de Janeiro', dateTime: '2025-07-25T15:00:00', description: 'Friendly but competitive beach volleyball at Copacabana. Teams & individuals welcome to join the fun under the sun!', attendees: ['p4', 'p8'], interestedUsers: ['p1', 'p9'], comments: [] },
        { id: 'c_rio1', title: 'Elevated Beats: Rooftop DJ Set', activityType: 'DJ Event', imageUrl: 'assets/images/events/event_rio_community_1.jpg', hostProfileId: null, locationCity: 'Rio de Janeiro', dateTime: '2025-07-18T21:00:00', description: 'Groove to live DJ sets against the backdrop of Rio\'s skyline. Good music, great views. Cover charge may apply.', attendees: [], interestedUsers: ['p8'], comments: [] },
        { id: 'e7_safari', title: 'Wild Safari Getaway', activityType: 'Safari', imageUrl: 'assets/images/events/event_safari.jpg', hostProfileId: 'p7', locationCity: 'Cape Town', dateTime: '2025-08-02T08:00:00', description: 'Weekend safari trip just outside the city. Chance to spot the Big Five and connect with nature. Limited spots available.', attendees: [], interestedUsers: ['p3', 'p6'], comments: [] },
        { id: 'e4_party', title: 'Rooftop Sunset Soiree', activityType: 'Party', imageUrl: 'assets/images/events/event_party.jpg', hostProfileId: 'p4', locationCity: 'Barcelona', dateTime: '2025-08-05T19:00:00', description: 'Chill vibes, curated music, and stunning city views as the sun sets. BYOB and share the fun. Great way to meet new people.', attendees: ['p1', 'p2'], interestedUsers: ['p5'], comments: [] },
        { id: 'e8_house_party', title: 'Chill House Party Vibes', activityType: 'House Party', imageUrl: 'assets/images/events/event_house_party.jpg', hostProfileId: 'p8', locationCity: 'Rio de Janeiro', dateTime: '2025-08-10T20:00:00', description: 'Good music, great company, relaxed atmosphere. Bring a snack or drink to contribute to the vibe. Let\'s make it memorable!', attendees: ['p2'], interestedUsers: ['p9'], comments: [] },
        { id: 'c_ct2', title: 'Beach Day Contemplation', activityType: 'Relaxation', imageUrl: 'assets/images/events/event_capetown_community_2.jpg', hostProfileId: null, locationCity: 'Cape Town', dateTime: '2025-08-15T10:00:00', description: 'Two surfboards, an empty beach, and the call of the ocean. Find your peace and soak in the tranquility.', attendees: [], interestedUsers: [], comments: [] },
        { id: 'e6_roadtrip', title: 'Coastal Roadtrip Adventure', activityType: 'Roadtrip', imageUrl: 'assets/images/events/event_roadtrip.jpg', hostProfileId: 'p6', locationCity: 'Barcelona', dateTime: '2025-08-22T09:30:00', description: 'Discover hidden gems along the Costa Brava. Scenic drives, charming villages, and spontaneous stops. Fuel costs shared.', attendees: [], interestedUsers: ['p1', 'p7'], comments: [] },
        { id: 'e9_wakeboarding', title: 'Wakeboarding Splash Fest', activityType: 'Wakeboarding', imageUrl: 'assets/images/events/event_wakeboarding.jpg', hostProfileId: 'p9', locationCity: 'Rio de Janeiro', dateTime: '2025-08-28T13:00:00', description: 'Hit the lagoon for some wakeboarding fun. Beginners welcome, lessons available! Get ready to ride the waves.', attendees: [], interestedUsers: ['p2', 'p8'], comments: [] },
        { id: 'c_bcn2', title: 'Indie Bookstore Book Nook', activityType: 'Book Club', imageUrl: 'assets/images/events/event_barcelona_community_2.jpg', hostProfileId: null, locationCity: 'Barcelona', dateTime: '2025-09-05T18:00:00', description: 'Discover hidden literary gems and share your favorite reads at our cozy indie bookstore gathering. Coffee and conversation.', attendees: [], interestedUsers: [], comments: [] },
        { id: 'c_rio2', title: 'Sunset Grooves on the Sand', activityType: 'DJ Event', imageUrl: 'assets/images/events/event_rio_community_2.jpg', hostProfileId: null, locationCity: 'Rio de Janeiro', dateTime: '2025-09-12T17:30:00', description: 'Chill electronic beats meet the ocean breeze as the sun dips below the horizon. Free entry, pure vibes.', attendees: [], interestedUsers: ['p2'], comments: [] }
    ];

    // DOM Elements
    const body = document.body;
    const feedPage = document.getElementById('feedPage');
    const profileDetailPage = document.getElementById('profileDetailPage');
    const createEventPage = document.getElementById('createEventPage');
    const allChatsPage = document.getElementById('allChatsPage');
    const chatPage = document.getElementById('chatPage');
    const myProfilePage = document.getElementById('myProfilePage'); 
    const calendarPage = document.getElementById('calendarPage');
    
    const themeToggleButton = document.getElementById('themeToggle');
    const themeIcon = themeToggleButton.querySelector('i');
    const viewToggleButton = document.getElementById('viewToggle');
    const viewIcon = viewToggleButton.querySelector('i');
    
    const mainNavButtons = document.querySelectorAll('#mainNav .nav-button'); // Corrected selector
    const navFeed = document.getElementById('navFeed');
    const navExplore = document.getElementById('navExplore');
    const navCalendar = document.getElementById('navCalendar');
    const navCreateVibe = document.getElementById('navCreateVibe');
    const navChats = document.getElementById('navChats');
    const navMyProfile = document.getElementById('navMyProfile');

    const detailProfilePic = document.getElementById('detailProfilePic');
    const detailProfileName = document.getElementById('detailProfileName');
    const detailProfileFriendStatus = document.getElementById('detailProfileFriendStatus');
    const connectFriendButton = document.getElementById('connectFriendButton');
    const detailProfileHostedEventsContainer = document.getElementById('detailProfileHostedEvents');
    const backButtonFromProfileDetail = document.getElementById('backButtonFromProfileDetail');

    const backButtonFromCreate = document.getElementById('backButtonFromCreate');
    const postVibeMockButton = createEventPage.querySelector('.post-vibe-btn');

    const chatListContainer = document.getElementById('chatListContainer');
    const backButtonFromAllChats = document.getElementById('backButtonFromAllChats');

    const chatEventName = document.getElementById('chatEventName');
    const chatMessagesContainer = chatPage.querySelector('.chat-messages');
    const chatMessageInput = document.getElementById('chatMessageInput');
    const sendChatMessageButton = document.getElementById('sendChatMessageButton');
    const backButtonForChat = document.getElementById('backButtonForChat');

    const myProfileDetailsContainer = document.getElementById('myProfileDetails');
    const backButtonFromMyProfile = document.getElementById('backButtonFromMyProfile');
    const backButtonFromCalendar = document.getElementById('backButtonFromCalendar');

    let currentEventForChat = null; 
    let previousPageIdStack = ['feedPage']; // Stack to manage back navigation
    let currentProfileBeingViewedId = null;

    const userInteractions = {
        interestedEvents: new Set(), 
        joinedEvents: new Set(),
        connectedFriends: new Set(), 
    };

    // Theme and View Mode Logic
    function applyTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode'); 
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeIcon) themeIcon.className = 'fas fa-sun'; // Check if element exists
        } else {
            body.classList.add('light-mode');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
        }
        localStorage.setItem('vibeTheme', theme); 
    }

    function applyViewMode(mode) {
        body.classList.remove('mobile-view', 'desktop-view');
        if (mode === 'desktop') {
            body.classList.add('desktop-view');
            if (viewIcon) viewIcon.className = 'fas fa-mobile-alt';
        } else {
            body.classList.add('mobile-view');
            if (viewIcon) viewIcon.className = 'fas fa-desktop';
        }
        localStorage.setItem('vibeViewMode', mode);
        if (!feedPage.classList.contains('hidden')) {
            const currentFeedType = navExplore.classList.contains('active') ? {forYou: false} : {forYou: true};
            renderFeedPage(currentFeedType);
        }
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('vibeTheme') || 'light';
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    if (viewToggleButton) {
        viewToggleButton.addEventListener('click', () => {
            const currentViewMode = localStorage.getItem('vibeViewMode') || 'mobile';
            applyViewMode(currentViewMode === 'desktop' ? 'mobile' : 'desktop');
        });
    }

    // Page Navigation
    function showPage(pageToShowId, activeNavButton = null) {
        const allPages = [feedPage, profileDetailPage, createEventPage, allChatsPage, chatPage, myProfilePage, calendarPage];
        const currentPageElement = allPages.find(p => p && !p.classList.contains('hidden'));

        if (currentPageElement && currentPageElement.id !== pageToShowId) {
            if (pageToShowId === 'feedPage' && previousPageIdStack.length > 1 && previousPageIdStack[previousPageIdStack.length -1] === 'feedPage') {
                // Avoid pushing feedPage multiple times if we are already returning to it
            } else if (previousPageIdStack[previousPageIdStack.length - 1] !== currentPageElement.id) {
                 previousPageIdStack.push(currentPageElement.id);
            }
        }
        
        allPages.forEach(page => {
            if (page) { 
                 page.classList.toggle('hidden', page.id !== pageToShowId);
            }
        });
        mainNavButtons.forEach(btn => btn.classList.remove('active'));
        if (activeNavButton) {
            activeNavButton.classList.add('active');
        }
        window.scrollTo(0,0); 
    }
    
    function goBack() {
        const targetPageId = previousPageIdStack.length > 1 ? previousPageIdStack.pop() : 'feedPage';
        let navBtnToActivate = navFeed; // Default
        if (targetPageId === 'allChatsPage') navBtnToActivate = navChats;
        else if (targetPageId === 'myProfilePage') navBtnToActivate = navMyProfile;
        // Add more specific nav activations if needed
        
        if (targetPageId === 'feedPage') {
            renderFeedPage({forYou: true}); // Always render fresh feed when going back to it
            showPage('feedPage', navFeed);
        } else {
            showPage(targetPageId, navBtnToActivate);
        }
    }


    // Render Functions
    function createEventPostElement(event) {
        const post = document.createElement('article');
        post.className = 'event-post';
        post.dataset.eventId = event.id;

        const host = profiles.find(p => p.id === event.hostProfileId);
        const hostName = host ? host.name : 'Vibe Community';
        const hostAvatarUrl = host ? host.profilePictureUrl : 'assets/images/logo/vibe_logo.png'; 

        const isInterested = userInteractions.interestedEvents.has(event.id);
        let isJoined = userInteractions.joinedEvents.has(event.id);

        post.innerHTML = `
            <div class="post-header" data-profile-id="${host ? host.id : 'community'}">
                <img src="${hostAvatarUrl}" alt="${hostName}" class="host-avatar">
                <span class="host-name">${hostName}</span>
                ${ host && host.isFriend ? '<i class="fas fa-user-friends" title="Friend" style="color: var(--accent-primary); margin-left: 8px;"></i>' : ''}
            </div>
            <div class="post-image-container">
                <img src="${event.imageUrl}" alt="${event.title}" class="post-image">
            </div>
            <div class="post-content">
                <h3 class="post-title">${event.title}</h3>
                <p class="post-datetime"><i class="far fa-calendar-alt"></i> ${formatDate(event.dateTime)}</p>
                <p class="post-caption">${event.description.substring(0, 120)}${event.description.length > 120 ? '...' : ''}</p>
                
                <span class="post-details-toggle" role="button" tabindex="0"><i class="fas fa-chevron-right"></i> View Details</span>
                <div class="post-details-content hidden">
                    <p><strong>Activity:</strong> ${event.activityType}</p>
                    <p><strong>Location:</strong> ${event.locationCity}</p>
                    <p><strong>Date & Time:</strong> ${formatDate(event.dateTime)}</p>
                    <p><strong>Full Description:</strong> ${event.description}</p>
                    ${hostName !== 'Vibe Community' ? `<p><strong>Hosted by:</strong> ${hostName}</p>` : ''}
                    <p class="stats-text"><em>(Mock) Attendees: ${event.attendees.length}, Interested: ${event.interestedUsers.length + (userInteractions.interestedEvents.has(event.id) && !event.attendees.includes('poc_user_id') ? 1:0) }</em></p>
                </div>

                <div class="post-actions">
                    <button class="post-action-button interested-btn ${isInterested ? 'active' : ''}" aria-label="Interested">
                        <i class="fas fa-heart ${isInterested ? '' : 'far'}"></i>
                    </button>
                    <button class="post-action-button join-btn ${isJoined ? 'view-chat-btn' : ''}" aria-label="${isJoined ? 'View Chat' : 'Join Event'}">
                        <i class="fas ${isJoined ? 'fa-comment-dots' : 'fa-plus'}"></i> <span>${isJoined ? 'Chat' : 'Join'}</span>
                    </button>
                    <button class="post-action-button comments-btn" aria-label="Comments">
                        <i class="far fa-comment-alt"></i> <span>${event.comments?.length || 0}</span>
                    </button>
                </div>
                <div class="post-comments-section hidden">
                    <div class="post-comments-placeholder">
                        <h4>Comments</h4>
                        <div class="comment-list">
                           ${event.comments && event.comments.length > 0 ? event.comments.map(c => `<p class="comment-item"><strong class="commenter-name" data-profile-id="${c.profileId || ''}">${c.user}:</strong> ${c.text}</p>`).join('') : '<p>No comments yet. Be the first!</p>'}
                        </div>
                    </div>
                    <div class="comment-input-area">
                        <input type="text" placeholder="Add a Vibe..." class="comment-input">
                        <button class="submit-comment-btn">Post</button>
                    </div>
                </div>
            </div>
        `;

        const postHeader = post.querySelector('.post-header');
        const profileId = postHeader.dataset.profileId;
        if (profileId && profileId !== 'community') {
            postHeader.addEventListener('click', () => renderProfileDetailPage(profileId));
        }

        const detailsToggle = post.querySelector('.post-details-toggle');
        const detailsContent = post.querySelector('.post-details-content');
        detailsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            detailsContent.classList.toggle('hidden');
            detailsToggle.classList.toggle('open');
        });
        detailsToggle.addEventListener('keypress', (e) => { if (e.key === 'Enter' || e.key === ' ') {e.stopPropagation(); detailsContent.classList.toggle('hidden'); detailsToggle.classList.toggle('open');}});

        post.querySelector('.interested-btn').addEventListener('click', function(e) { e.stopPropagation(); toggleInterest(event.id, this, post);});
        post.querySelector('.join-btn').addEventListener('click', function(e) { e.stopPropagation(); handleJoinEvent(event.id, this); });
        post.querySelector('.comments-btn').addEventListener('click', function(e) { 
            e.stopPropagation();
            post.querySelector('.post-comments-section').classList.toggle('hidden');
        });
        
        post.querySelectorAll('.comment-item .commenter-name').forEach(nameEl => {
            const commenterProfileId = nameEl.dataset.profileId;
            if (commenterProfileId && profiles.find(p => p.id === commenterProfileId)) {
                nameEl.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    renderProfileDetailPage(commenterProfileId);
                });
            }
        });

        post.querySelector('.submit-comment-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            const commentInput = post.querySelector('.comment-input');
            const currentEvent = events.find(e => e.id === event.id); // Use event from closure
            if (commentInput.value.trim() !== "" && currentEvent) {
                const myMockProfile = profiles.find(p=>p.isFriend) || profiles[0]; // Use first friend or first profile
                const newComment = { profileId: myMockProfile.id, user: myMockProfile.name, text: commentInput.value.trim() };
                if (!currentEvent.comments) currentEvent.comments = [];
                currentEvent.comments.push(newComment);
                
                const commentListDiv = post.querySelector('.comment-list');
                commentListDiv.innerHTML = `${currentEvent.comments.map(c => `<p class="comment-item"><strong class="commenter-name" data-profile-id="${c.profileId || ''}">${c.user}:</strong> ${c.text}</p>`).join('')}`;
                post.querySelector('.comments-btn span').textContent = currentEvent.comments.length;
                
                commentListDiv.querySelectorAll('.comment-item .commenter-name').forEach(nameEl => {
                     const commenterProfileId = nameEl.dataset.profileId;
                    if (commenterProfileId && profiles.find(p => p.id === commenterProfileId)) {
                        nameEl.addEventListener('click', (ev) => {
                            ev.stopPropagation();
                            renderProfileDetailPage(commenterProfileId);
                        });
                    }
                });
                commentInput.value = "";
            }
        });
        return post;
    }

    function renderFeedPage(options = { forYou: true }) {
        feedPage.innerHTML = ''; 
        
        let eventsToDisplay;
        const now = new Date(); // For sorting, filter out past events for "For You"
        
        if (options.forYou) {
            const futureEvents = events.filter(e => new Date(e.dateTime) >= now);
            const friendsEvents = futureEvents.filter(event => {
                const host = profiles.find(p => p.id === event.hostProfileId);
                return host && host.isFriend;
            }).sort((a,b) => new Date(a.dateTime) - new Date(b.dateTime)); // Soonest first

            const communityEvents = futureEvents.filter(e => !e.hostProfileId)
                                    .sort((a,b) => new Date(a.dateTime) - new Date(b.dateTime));

            const nonFriendHostedEvents = futureEvents.filter(event => {
                const host = profiles.find(p => p.id === event.hostProfileId);
                return host && !host.isFriend;
            }).sort((a,b) => new Date(a.dateTime) - new Date(b.dateTime));
            
            eventsToDisplay = [...friendsEvents, ...communityEvents, ...nonFriendHostedEvents];
        } else { // "Explore" logic - show all upcoming events, newest (actually soonest) first
            eventsToDisplay = [...events].filter(e => new Date(e.dateTime) >= now)
                               .sort((a,b) => new Date(a.dateTime) - new Date(b.dateTime)); 
        }

        if (eventsToDisplay.length === 0) {
            feedPage.innerHTML = '<p style="text-align:center; padding: 20px; color: var(--text-secondary);">No upcoming vibes to show right now. Why not create one?</p>';
        } else {
            eventsToDisplay.forEach(event => {
                feedPage.appendChild(createEventPostElement(event));
            });
        }
    }
    
    function toggleInterest(eventId, buttonElement, postElement) {
        const heartIcon = buttonElement.querySelector('i');
        const event = events.find(e => e.id === eventId);
        if (!event) return;

        if (userInteractions.interestedEvents.has(eventId)) {
            userInteractions.interestedEvents.delete(eventId);
            heartIcon.className = 'far fa-heart'; // Regular (outline)
            buttonElement.classList.remove('active');
        } else {
            userInteractions.interestedEvents.add(eventId);
            heartIcon.className = 'fas fa-heart'; // Solid
            buttonElement.classList.add('active');
        }
        // Update interested count in details if open
        const detailsContent = postElement.querySelector('.post-details-content');
        if (!detailsContent.classList.contains('hidden')) {
            const statsParagraph = detailsContent.querySelector('.stats-text');
            if (statsParagraph) {
                const interestedCountBase = event.interestedUsers.length;
                const userIsInterested = userInteractions.interestedEvents.has(eventId);
                statsParagraph.textContent = `(Mock) Attendees: ${event.attendees.length}, Interested: ${interestedCountBase + (userIsInterested ? 1:0)}`;
            }
        }
    }

    function handleJoinEvent(eventId, buttonElement) {
        const icon = buttonElement.querySelector('i');
        const textSpan = buttonElement.querySelector('span');

        if (userInteractions.joinedEvents.has(eventId)) {
            // Already joined, button now acts as "View Chat"
            currentEventForChat = eventId; 
            renderChatPage(eventId);
        } else {
            // Joining for the first time
            userInteractions.joinedEvents.add(eventId);
            if (!userInteractions.interestedEvents.has(eventId)) { 
                userInteractions.interestedEvents.add(eventId); 
                const interestedBtn = buttonElement.closest('.event-post').querySelector('.interested-btn');
                if (interestedBtn) {
                    interestedBtn.classList.add('active');
                    interestedBtn.querySelector('i').className = 'fas fa-heart';
                }
            }
            // Update button to "Joined" first, then offer chat
            buttonElement.classList.remove('join-btn'); // Remove initial join class
            buttonElement.classList.add('joined'); 
            icon.className = 'fas fa-check-circle'; // Show checkmark
            if(textSpan) textSpan.textContent = 'Joined'; 
            
            // After a short delay, change to "Chat" button
            setTimeout(() => {
                buttonElement.classList.add('view-chat-btn');
                icon.className = 'fas fa-comment-dots';
                if(textSpan) textSpan.textContent = 'Chat';
            }, 1500); // 1.5 second delay

            alert(`You've joined "${events.find(e=>e.id === eventId)?.title}"! The button will turn into a 'Chat' button shortly.`);
        }
    }

    function renderChatPage(eventId) {
        const event = events.find(e => e.id === eventId);
        if (!event) {
            renderAllChatsPage(); 
            return;
        }
        currentEventForChat = eventId; 
        chatEventName.textContent = event.title;
        chatMessagesContainer.innerHTML = ''; 

        const host = profiles.find(p => p.id === event.hostProfileId);
        const mockAttendees = event.attendees.map(id => profiles.find(p => p.id === id)).filter(Boolean);

        if (host) {
             addChatMessage(host.id, host.name, `Welcome to the Vibe for ${event.title}! Let's coordinate here.`, false);
        }
        mockAttendees.slice(0, 2).forEach(attendee => { 
            if (attendee.id !== host?.id) addChatMessage(attendee.id, attendee.name, `Looking forward to this!`, false);
        });
        addChatMessage('p1', "You (Alex R.)", `Joined the Vibe! Can't wait for ${event.title}.`, true); 
        
        showPage('chatPage', navChats); 
    }

    function addChatMessage(profileId, senderName, messageText, isUserMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', isUserMessage ? 'user-message' : 'other-message');
        const senderStrong = document.createElement('strong');
        senderStrong.textContent = senderName;
        if (!isUserMessage && profileId && profiles.find(p=>p.id === profileId)) { 
            senderStrong.dataset.profileId = profileId;
            senderStrong.addEventListener('click', () => {
                previousPageIdStack.push('chatPage'); // So we can come back to chat
                renderProfileDetailPage(profileId);
            });
        }
        messageDiv.appendChild(senderStrong);
        const messageP = document.createElement('p');
        messageP.textContent = messageText;
        messageDiv.appendChild(messageP);
        
        chatMessagesContainer.appendChild(messageDiv);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; 
    }

    sendChatMessageButton.addEventListener('click', () => {
        const messageText = chatMessageInput.value.trim();
        if (messageText && currentEventForChat) {
            addChatMessage('p1', "You (Alex R.)", messageText, true); 
            chatMessageInput.value = ''; 
            setTimeout(() => {
                const event = events.find(e => e.id === currentEventForChat);
                const host = profiles.find(p => p.id === event.hostProfileId);
                let mockReplyProfile = host || profiles.find(p=>p.id === event.attendees[0]);
                if (!mockReplyProfile && profiles.length > 1) mockReplyProfile = profiles[1]; // Ensure some profile exists
                else if (!mockReplyProfile) mockReplyProfile = {id: 'p_temp', name: 'Vibester'};


                addChatMessage(mockReplyProfile.id, mockReplyProfile.name, "Awesome! Sounds great.", false);
            }, 1200);
        }
    });
    chatMessageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendChatMessageButton.click();
        }
    });
    
    backButtonForChat.addEventListener('click', () => goBack());
    
    function renderProfileDetailPage(profileId) {
        if (profileId === 'community' || !profileId) { 
            alert("This is a Vibe Community event or the host is unknown.");
            return;
        }
        const profile = profiles.find(p => p.id === profileId);
        if (!profile) {
            renderFeedPage({ forYou: true }); 
            return;
        }
        currentProfileBeingViewedId = profileId;

        detailProfilePic.src = profile.profilePictureUrl;
        detailProfilePic.alt = profile.name;
        detailProfileName.textContent = profile.name;
        profileDetailPage.querySelectorAll('.profile-name-placeholder').forEach(el => el.textContent = profile.name.split(' ')[0]); 
        
        const isAlreadyConnected = userInteractions.connectedFriends.has(profileId);
        const isSelf = profile.id === 'p1'; // Assuming p1 is "You" for connect logic

        if (!isSelf && !profile.isFriend) {
            connectFriendButton.classList.remove('hidden');
            if (isAlreadyConnected) {
                connectFriendButton.innerHTML = '<i class="fas fa-check"></i> Connected';
                connectFriendButton.classList.add('connected');
                connectFriendButton.disabled = true;
            } else {
                connectFriendButton.innerHTML = '<i class="fas fa-user-plus"></i> Connect';
                connectFriendButton.classList.remove('connected');
                connectFriendButton.disabled = false;
            }
        } else {
            connectFriendButton.classList.add('hidden');
        }
        detailProfileFriendStatus.textContent = profile.isFriend ? "You are friends" : (isAlreadyConnected ? "Connection Request Sent" : "Connect with them!");

        detailProfileHostedEventsContainer.innerHTML = '';
        const hostedEvents = events.filter(e => e.hostProfileId === profileId);
        if (hostedEvents.length > 0) {
            hostedEvents.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card'; 
                eventCard.innerHTML = `
                    <img src="${event.imageUrl}" alt="${event.title}" class="event-card-image">
                    <div class="event-card-info">
                        <h4 class="event-card-title">${event.title}</h4>
                         <p class="event-card-location"><i class="fas fa-map-marker-alt"></i> ${event.locationCity}</p>
                         <p class="post-datetime" style="font-size: 0.75rem;"><i class="far fa-calendar-alt"></i> ${formatDate(event.dateTime)}</p>
                    </div>
                `;
                detailProfileHostedEventsContainer.appendChild(eventCard);
            });
        } else {
            detailProfileHostedEventsContainer.innerHTML = `<p style="color: var(--text-secondary);">${profile.name} hasn't hosted any Vibes yet.</p>`;
        }
        showPage('profileDetailPage'); 
    }
    if(connectFriendButton) {
        connectFriendButton.addEventListener('click', function() {
            if (currentProfileBeingViewedId && !userInteractions.connectedFriends.has(currentProfileBeingViewedId)) {
                userInteractions.connectedFriends.add(currentProfileBeingViewedId);
                this.innerHTML = '<i class="fas fa-check"></i> Connected';
                this.classList.add('connected');
                this.disabled = true;
                detailProfileFriendStatus.textContent = "Connection Request Sent";
                alert(`Mock connection request sent to ${profiles.find(p=>p.id === currentProfileBeingViewedId)?.name}!`);
            }
        });
    }
    if(backButtonFromProfileDetail) backButtonFromProfileDetail.addEventListener('click', () => goBack());

    function renderCreateEventPage() {
        createEventPage.querySelector('input[type="text"]').value = '';
        createEventPage.querySelector('textarea').value = '';
        createEventPage.querySelector('input[type="datetime-local"]').value = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,16); // Default to one week from now
        showPage('createEventPage', navCreateVibe);
    }
    if(postVibeMockButton) {
        postVibeMockButton.addEventListener('click', () => {
            const title = createEventPage.querySelector('input[type="text"]').value;
            if (title.trim()) {
                alert(`Vibe "${title}" would be posted! (This is a mock action)`);
                renderFeedPage({ forYou: true }); 
                showPage('feedPage', navFeed);
            } else {
                alert("Please enter a title for your Vibe!");
            }
        });
    }
    if(backButtonFromCreate) backButtonFromCreate.addEventListener('click', () => goBack());

    function renderAllChatsPage() {
        chatListContainer.innerHTML = '';
        const joinedEventIds = Array.from(userInteractions.joinedEvents);
        
        if (joinedEventIds.length === 0) {
            const friendProfiles = profiles.filter(p => p.isFriend).slice(0, 2); 
            if (friendProfiles.length > 0) {
                friendProfiles.forEach(friend => {
                     const chatItem = document.createElement('div');
                    chatItem.className = 'chat-list-item mock-past-chat';
                    chatItem.innerHTML = `
                        <img src="${friend.profilePictureUrl}" alt="${friend.name}" class="chat-item-avatar">
                        <div>
                            <h4>Chat with ${friend.name}</h4>
                            <p>Mock past message: Hey, good to see you!... </p> 
                        </div>
                    `;
                    chatItem.addEventListener('click', () => {
                        alert(`This would open your past chat with ${friend.name}. (Mock Feature)`);
                    });
                    chatListContainer.appendChild(chatItem);
                });
                 chatListContainer.insertAdjacentHTML('beforeend', '<p class="no-chats-message" style="margin-top:15px;">Join event Vibes to see active group chats here!</p>');
            } else {
                 chatListContainer.innerHTML = '<p class="no-chats-message">You haven\'t joined any Vibe chats yet and no past chats to show. Join an event to start chatting!</p>';
            }
        } else {
            joinedEventIds.slice().reverse().forEach(eventId => { // Show most recent first
                const event = events.find(e => e.id === eventId);
                if (event) {
                    const host = profiles.find(p=>p.id === event.hostProfileId);
                    const avatar = host ? host.profilePictureUrl : event.imageUrl; 
                    const chatItem = document.createElement('div');
                    chatItem.className = 'chat-list-item';
                    chatItem.dataset.eventId = eventId;
                    chatItem.innerHTML = `
                        <img src="${avatar}" alt="${event.title}" class="chat-item-avatar">
                        <div>
                            <h4>${event.title}</h4>
                            <p><i class="far fa-calendar-alt"></i> ${formatDate(event.dateTime)}</p>
                            <p>Last message: (Mock) Awesome! See you there...</p> 
                        </div>
                    `;
                    chatItem.addEventListener('click', () => {
                        renderChatPage(eventId);
                    });
                    chatListContainer.appendChild(chatItem);
                }
            });
        }
        showPage('allChatsPage', navChats);
    }
    if(backButtonFromAllChats) backButtonFromAllChats.addEventListener('click', () => goBack());

    function renderMyProfilePage() {
        let interestedList = "<p>None yet!</p>";
        if (userInteractions.interestedEvents.size > 0) {
            interestedList = `<ul>${Array.from(userInteractions.interestedEvents)
                                     .map(id => `<li>${events.find(e => e.id === id)?.title || "Unknown Event"}</li>`)
                                     .join('')}</ul>`;
        }

        let joinedList = "<p>None yet!</p>";
        if (userInteractions.joinedEvents.size > 0) {
            joinedList = `<ul>${Array.from(userInteractions.joinedEvents)
                                   .map(id => `<li>${events.find(e => e.id === id)?.title || "Unknown Event"}</li>`)
                                   .join('')}</ul>`;
        }
        const myMockProfileData = profiles.find(p=>p.id === 'p1'); // Assume p1 is "You"

        myProfileDetailsContainer.innerHTML = `
            <img src="${myMockProfileData.profilePictureUrl}" alt="My Profile Pic" class="my-profile-pic">
            <p><strong>Name:</strong> ${myMockProfileData.name} (You)</p>
            <div style="text-align:left;">
                <p><i class="fas fa-heart"></i> <strong>Interested In (${userInteractions.interestedEvents.size}):</strong></p> ${interestedList}
                <p><i class="fas fa-check-circle"></i> <strong>Joined Vibes (${userInteractions.joinedEvents.size}):</strong></p> ${joinedList}
            </div>
            <p style="margin-top: 20px;"><button class="action-button">Edit Profile (Mock)</button></p>
        `;
        showPage('myProfilePage', navMyProfile);
    }
    if(backButtonFromMyProfile) backButtonFromMyProfile.addEventListener('click', () => goBack());
    if(backButtonFromCalendar) backButtonFromCalendar.addEventListener('click', () => goBack());

    // Nav button handlers
    if(navFeed) navFeed.addEventListener('click', () => { renderFeedPage({ forYou: true }); showPage('feedPage', navFeed); });
    if(navExplore) navExplore.addEventListener('click', () => { renderFeedPage({ forYou: false }); showPage('feedPage', navExplore); });
    if(navCalendar) navCalendar.addEventListener('click', () => showPage('calendarPage', navCalendar));
    if(navMyProfile) navMyProfile.addEventListener('click', () => renderMyProfilePage());
    if(navCreateVibe) navCreateVibe.addEventListener('click', () => renderCreateEventPage());
    if(navChats) navChats.addEventListener('click', () => renderAllChatsPage());

    // Initialization
    function initializeApp() {
        const savedTheme = localStorage.getItem('vibeTheme');
        applyTheme(savedTheme || 'light'); // Default to light if nothing saved

        const savedViewMode = localStorage.getItem('vibeViewMode');
        applyViewMode(savedViewMode || 'mobile'); // Default to mobile

        renderFeedPage({ forYou: true }); 
        showPage('feedPage', navFeed);    
    }

    initializeApp();
});