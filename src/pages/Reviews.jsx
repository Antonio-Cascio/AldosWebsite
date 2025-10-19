import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme, useMediaQuery } from '@mui/material';
import '../App.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Edit dialog state
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingReview, setDeletingReview] = useState(null);

  // New review dialog state
  const [newReviewFormOpen, setNewReviewFormOpen] = useState(false);

  // Load reviews when component mounts
  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    try {
      const res = await fetch('http://localhost:3001/api/reviews');
      const reviewsData = await res.json();
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  }

  async function deleteReview(id) {
    try {
      const res = await fetch(`http://localhost:3001/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        loadReviews(); // Reload reviews after deletion
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  // Open edit dialog
  const handleEditClick = (review) => {
    setEditingReview(review);
    setEditFormData({
      name: review.name,
      review: review.review,
      rating: review.rating
    });
    setEditDialogOpen(true);
  };

  // Close edit dialog
  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setEditingReview(null);
    setEditFormData({ name: '', review: '', rating: 0 });
  };

  // Save edited review
  const handleSaveEdit = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/reviews/${editingReview.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
      
      if (res.ok) {
        loadReviews(); // Reload reviews after update
        handleCloseEditDialog();
      }
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  // Open delete dialog
  const handleDeleteClick = (review) => {
    setDeletingReview(review);
    setDeleteDialogOpen(true);
  };

  // Close delete dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeletingReview(null);
  };

  // Confirm delete review
  const handleDeleteReview = async () => {
    if (deletingReview) {
      await deleteReview(deletingReview.id);
      handleCloseDeleteDialog();
    }
  };

  const handleNewReviewClick = () => {
    setNewReviewFormOpen(true);
  };

  const handleCloseNewReviewDialog = () => {
    setNewReviewFormOpen(false);
    setFormData({ name: '', email: '', review: '', rating: 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        // Reload reviews after adding new one
        loadReviews();
        // Clear form and close dialog
        setFormData({ name: '', email: '', review: '', rating: 0 });
        setNewReviewFormOpen(false);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eae9e9 0%, #f5f5f5 100%)',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: { xs: 3, md: 4 },
              color: '#cf2e2e',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Customer Reviews
          </Typography>
          <Box sx={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #cf2e2e, #a02323)',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              px: { xs: 2, md: 0 }
            }}
          >
            See what our customers are saying about their dining experience
          </Typography>
        </Box>

        {/* Add Review Button */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Button
            onClick={handleNewReviewClick}
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#cf2e2e',
              '&:hover': {
                bgcolor: '#a02323',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(207, 46, 46, 0.3)'
              },
              px: { xs: 3, md: 4 },
              py: { xs: 2, md: 2 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              fontFamily: 'Open Sans, sans-serif',
              minHeight: 48,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Leave a Review!
          </Button>
        </Box>

        {/* Reviews Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: { xs: 3, md: 4 },
          mb: { xs: 4, md: 6 }
        }}>
          {reviews.map(review => (
            <Card key={review.id} sx={{ 
              background: 'white',
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #e9ecef',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
              }
            }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      color: '#333',
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}>
                      {review.name}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: { xs: '0.85rem', md: '0.9rem' }
                    }}>
                      {new Date(review.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      onClick={() => handleEditClick(review)}
                      size="small"
                      sx={{ 
                        minWidth: 32,
                        minHeight: 32,
                        p: 1,
                        color: '#cf2e2e',
                        '&:hover': { backgroundColor: 'rgba(207, 46, 46, 0.1)' }
                      }}
                    >
                      <EditIcon sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(review)}
                      size="small"
                      sx={{ 
                        minWidth: 32,
                        minHeight: 32,
                        p: 1,
                        color: '#d32f2f',
                        '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.1)' }
                      }}
                    >
                      <DeleteIcon sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
                    </Button>
                  </Box>
                </Box>
                
                <Rating     
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size={isMobile ? "medium" : "large"}
                  sx={{ mb: 2 }}
                />
                
                <Typography variant="body1" sx={{ 
                  fontFamily: 'Open Sans, sans-serif',
                  color: '#555',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.6
                }}>
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Delete Review Dialog */}
      <Dialog 
        open={deleteDialogOpen} 
        onClose={handleCloseDeleteDialog} 
        maxWidth="sm" 
        fullWidth
        sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ 
          fontFamily: 'Playfair Display, serif',
          color: '#cf2e2e',
          fontSize: { xs: '1.3rem', md: '1.5rem' }
        }}>
          Delete Review
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ 
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '0.95rem', md: '1rem' }
          }}>
            Are you sure you want to delete this review?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: { xs: 2, md: 3 } }}>
          <Button 
            onClick={handleCloseDeleteDialog}
            sx={{ 
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteReview} 
            variant="contained"
            sx={{ 
              bgcolor: '#d32f2f',
              '&:hover': { bgcolor: '#b71c1c' },
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Delete Review
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Review Dialog */}
      <Dialog 
        open={editDialogOpen} 
        onClose={handleCloseEditDialog} 
        maxWidth="sm" 
        fullWidth
        sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ 
          fontFamily: 'Playfair Display, serif',
          color: '#cf2e2e',
          fontSize: { xs: '1.3rem', md: '1.5rem' }
        }}>
          Edit Review
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
          <TextField
            fullWidth
            label="Review"
            multiline
            rows={4}
            value={editFormData.review}
            onChange={(e) => setEditFormData({...editFormData, review: e.target.value})}
            margin="normal"
            required
            sx={{ 
              '& .MuiInputBase-root': { 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }
            }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography component="legend" sx={{ 
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}>
              Rating
            </Typography>
            <Rating
              name="rating"
              value={editFormData.rating}
              onChange={(event, newValue) => {
                setEditFormData({...editFormData, rating: newValue});
              }}
              size={isMobile ? "medium" : "large"}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: { xs: 2, md: 3 } }}>
          <Button 
            onClick={handleCloseEditDialog}
            sx={{ 
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSaveEdit} 
            variant="contained"
            sx={{ 
              bgcolor: '#cf2e2e',
              '&:hover': { bgcolor: '#a02323' },
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Review Dialog */}
      <Dialog 
        open={newReviewFormOpen} 
        onClose={handleCloseNewReviewDialog} 
        maxWidth="sm" 
        fullWidth
        sx={{ '& .MuiDialog-paper': { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ 
          fontFamily: 'Playfair Display, serif',
          color: '#cf2e2e',
          fontSize: { xs: '1.3rem', md: '1.5rem' }
        }}>
          Add New Review
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
          <TextField
            fullWidth
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            margin="normal"
            required
            sx={{ 
              '& .MuiInputBase-root': { 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            margin="normal"
            required
            sx={{ 
              '& .MuiInputBase-root': { 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }
            }}
          />
          <TextField
            fullWidth
            label="Review"
            multiline
            rows={4}
            value={formData.review}
            onChange={(e) => setFormData({...formData, review: e.target.value})}
            margin="normal"
            required
            sx={{ 
              '& .MuiInputBase-root': { 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '0.9rem', md: '1rem' }
              }
            }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography component="legend" sx={{ 
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}>
              Rating
            </Typography>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={(event, newValue) => {
                setFormData({...formData, rating: newValue});
              }}
              size={isMobile ? "medium" : "large"}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: { xs: 2, md: 3 } }}>
          <Button 
            onClick={handleCloseNewReviewDialog}
            sx={{ 
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            sx={{ 
              bgcolor: '#cf2e2e',
              '&:hover': { bgcolor: '#a02323' },
              fontFamily: 'Open Sans, sans-serif',
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}